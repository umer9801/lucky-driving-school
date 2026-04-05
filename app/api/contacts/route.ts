import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Contact from '@/lib/models/Contact'
import { createContactEmailForUser, createContactEmailForOwner } from '@/lib/email-simple'

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
    await connectDB()
    const body = await request.json()

    // Create contact in database
    const contact = await Contact.create(body)

    // Create mailto links for emails
    const userEmail = createContactEmailForUser({
      fullName: contact.fullName,
      email: contact.email,
      subject: contact.subject,
    })

    const ownerEmail = createContactEmailForOwner({
      fullName: contact.fullName,
      email: contact.email,
      phone: contact.phone,
      subject: contact.subject,
      message: contact.message,
    })

    return NextResponse.json({ 
      success: true, 
      data: contact,
      emails: {
        user: userEmail,
        owner: ownerEmail,
      }
    }, { status: 201 })
  } catch (error) {
    console.error('Error creating contact:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create contact' },
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
