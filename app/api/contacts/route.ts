import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Contact from '@/lib/models/Contact'
import { sendContactConfirmationToUser, sendContactNotificationToOwner } from '@/lib/email'

// GET - Fetch all contacts
export async function GET() {
  try {
    await connectDB()
    const contacts = await Contact.find({}).sort({ createdAt: -1 })
    return NextResponse.json({ success: true, contacts })
  } catch (error) {
    console.error('Error fetching contacts:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch contacts' },
      { status: 500 }
    )
  }
}

// POST - Create new contact
export async function POST(request: NextRequest) {
  try {
    console.log('📧 Contact API called')
    
    // Check if MongoDB URI is configured
    if (!process.env.MONGODB_URI) {
      console.error('❌ MONGODB_URI not configured')
      return NextResponse.json(
        { success: false, error: 'Database not configured. Please contact administrator.' },
        { status: 500 }
      )
    }
    
    await connectDB()
    console.log('✅ MongoDB connected')
    
    const body = await request.json()
    console.log('📋 Request body:', JSON.stringify(body, null, 2))

    // Validate required fields
    if (!body.fullName || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create contact in database
    const contact = await Contact.create(body)
    console.log('✅ Contact created:', contact._id)

    // Send emails (don't wait for them to complete)
    Promise.all([
      sendContactConfirmationToUser({
        fullName: contact.fullName,
        email: contact.email,
        subject: contact.subject,
      }),
      sendContactNotificationToOwner({
        fullName: contact.fullName,
        email: contact.email,
        phone: contact.phone,
        subject: contact.subject,
        message: contact.message,
      }),
    ]).catch((error) => {
      console.error('⚠️ Error sending emails:', error)
    })

    return NextResponse.json({ 
      success: true, 
      data: contact,
      message: 'Contact message sent successfully'
    }, { status: 201 })
  } catch (error: any) {
    console.error('❌ Error creating contact:', error)
    console.error('Error stack:', error.stack)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send message',
        details: error.message,
        hint: 'Please check server logs for more details'
      },
      { status: 500 }
    )
  }
}

// PATCH - Update contact status
export async function PATCH(request: NextRequest) {
  try {
    await connectDB()
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const body = await request.json()

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Contact ID is required' },
        { status: 400 }
      )
    }

    const contact = await Contact.findByIdAndUpdate(
      id,
      { status: body.status },
      { new: true }
    )

    if (!contact) {
      return NextResponse.json(
        { success: false, error: 'Contact not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true, contact })
  } catch (error) {
    console.error('Error updating contact:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update contact' },
      { status: 500 }
    )
  }
}

// DELETE - Delete contact
export async function DELETE(request: NextRequest) {
  try {
    await connectDB()
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Contact ID is required' },
        { status: 400 }
      )
    }

    const contact = await Contact.findByIdAndDelete(id)

    if (!contact) {
      return NextResponse.json(
        { success: false, error: 'Contact not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true, message: 'Contact deleted' })
  } catch (error) {
    console.error('Error deleting contact:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete contact' },
      { status: 500 }
    )
  }
}
