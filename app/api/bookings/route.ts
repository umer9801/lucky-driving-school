import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Booking from '@/lib/models/Booking'
import { createBookingEmailForUser, createBookingEmailForOwner } from '@/lib/email-simple'

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
    await connectDB()
    const body = await request.json()

    // Create booking in database
    const booking = await Booking.create(body)

    // Create mailto links for emails
    const userEmail = createBookingEmailForUser({
      fullName: booking.fullName,
      email: booking.email,
      courseName: booking.courseName,
      preferredDate: booking.preferredDate,
      preferredTime: booking.preferredTime,
    })

    const ownerEmail = createBookingEmailForOwner({
      fullName: booking.fullName,
      email: booking.email,
      phone: booking.phone,
      courseName: booking.courseName,
      preferredDate: booking.preferredDate,
      preferredTime: booking.preferredTime,
      experience: booking.experience,
      licenseStatus: booking.licenseStatus,
      message: booking.message,
    })

    return NextResponse.json({ 
      success: true, 
      data: booking,
      emails: {
        user: userEmail,
        owner: ownerEmail,
      }
    }, { status: 201 })
  } catch (error) {
    console.error('Error creating booking:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create booking' },
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
