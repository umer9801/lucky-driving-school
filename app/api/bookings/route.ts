import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Booking from '@/lib/models/Booking'
import { sendBookingConfirmationToUser, sendBookingNotificationToOwner } from '@/lib/email'

// GET - Fetch all bookings
export async function GET() {
  try {
    await connectDB()
    const bookings = await Booking.find({}).sort({ createdAt: -1 })
    return NextResponse.json({ success: true, bookings })
  } catch (error) {
    console.error('Error fetching bookings:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch bookings' },
      { status: 500 }
    )
  }
}

// POST - Create new booking
export async function POST(request: NextRequest) {
  try {
    console.log('📝 Booking API called')
    
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
    if (!body.fullName || !body.email || !body.phone) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create booking in database
    const booking = await Booking.create(body)
    console.log('✅ Booking created:', booking._id)

    // Send emails (don't wait for them to complete)
    Promise.all([
      sendBookingConfirmationToUser({
        fullName: booking.fullName,
        email: booking.email,
        courseName: booking.courseName,
        preferredDate: booking.preferredDate,
        preferredTime: booking.preferredTime,
      }),
      sendBookingNotificationToOwner({
        fullName: booking.fullName,
        email: booking.email,
        phone: booking.phone,
        courseName: booking.courseName,
        preferredDate: booking.preferredDate,
        preferredTime: booking.preferredTime,
        experience: booking.experience,
        licenseStatus: booking.licenseStatus,
        message: booking.message,
      }),
    ]).catch((error) => {
      console.error('⚠️ Error sending emails:', error)
    })

    return NextResponse.json({ 
      success: true, 
      data: booking,
      message: 'Booking created successfully'
    }, { status: 201 })
  } catch (error: any) {
    console.error('❌ Error creating booking:', error)
    console.error('Error stack:', error.stack)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to create booking', 
        details: error.message,
        hint: 'Please check server logs for more details'
      },
      { status: 500 }
    )
  }
}

// PATCH - Update booking status
export async function PATCH(request: NextRequest) {
  try {
    await connectDB()
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const body = await request.json()

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Booking ID is required' },
        { status: 400 }
      )
    }

    const booking = await Booking.findByIdAndUpdate(
      id,
      { status: body.status },
      { new: true }
    )

    if (!booking) {
      return NextResponse.json(
        { success: false, error: 'Booking not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true, booking })
  } catch (error) {
    console.error('Error updating booking:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update booking' },
      { status: 500 }
    )
  }
}

// DELETE - Delete booking
export async function DELETE(request: NextRequest) {
  try {
    await connectDB()
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Booking ID is required' },
        { status: 400 }
      )
    }

    const booking = await Booking.findByIdAndDelete(id)

    if (!booking) {
      return NextResponse.json(
        { success: false, error: 'Booking not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true, message: 'Booking deleted' })
  } catch (error) {
    console.error('Error deleting booking:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete booking' },
      { status: 500 }
    )
  }
}
