import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Review from '@/lib/models/Review'

// GET - Fetch approved reviews
export async function GET() {
  try {
    await connectDB()
    const reviews = await Review.find({ status: 'approved' })
      .sort({ createdAt: -1 })
      .limit(50)
    
    return NextResponse.json({ success: true, reviews })
  } catch (error) {
    console.error('Error fetching reviews:', error)
    // Return empty reviews instead of 500 so page still loads
    return NextResponse.json({ success: true, reviews: [] })
  }
}

// POST - Create new review
export async function POST(request: NextRequest) {
  try {
    await connectDB()
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.rating || !body.comment) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create review
    const review = await Review.create({
      name: body.name,
      email: body.email,
      rating: body.rating,
      comment: body.comment,
      status: 'pending',
      isGoogleReview: false,
    })

    return NextResponse.json({ 
      success: true, 
      data: review,
      message: 'Review submitted successfully! It will be visible after approval.'
    }, { status: 201 })
  } catch (error: any) {
    console.error('Error creating review:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit review' },
      { status: 500 }
    )
  }
}

// PATCH - Update review status (Admin only)
export async function PATCH(request: NextRequest) {
  try {
    await connectDB()
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const body = await request.json()

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Review ID is required' },
        { status: 400 }
      )
    }

    const review = await Review.findByIdAndUpdate(
      id,
      { status: body.status },
      { new: true }
    )

    if (!review) {
      return NextResponse.json(
        { success: false, error: 'Review not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true, review })
  } catch (error) {
    console.error('Error updating review:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update review' },
      { status: 500 }
    )
  }
}

// DELETE - Delete review (Admin only)
export async function DELETE(request: NextRequest) {
  try {
    await connectDB()
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Review ID is required' },
        { status: 400 }
      )
    }

    const review = await Review.findByIdAndDelete(id)

    if (!review) {
      return NextResponse.json(
        { success: false, error: 'Review not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true, message: 'Review deleted' })
  } catch (error) {
    console.error('Error deleting review:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete review' },
      { status: 500 }
    )
  }
}
