import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Review from '@/lib/models/Review'
import { googleReviews } from '@/lib/seed-reviews'

export async function POST() {
  try {
    await connectDB()

    // Check if reviews already exist
    const existingCount = await Review.countDocuments({ isGoogleReview: true })
    
    if (existingCount > 0) {
      return NextResponse.json({
        success: false,
        message: 'Google reviews already seeded',
        count: existingCount
      })
    }

    // Insert Google reviews
    const result = await Review.insertMany(googleReviews)

    return NextResponse.json({
      success: true,
      message: 'Google reviews seeded successfully',
      count: result.length
    })
  } catch (error: any) {
    console.error('Error seeding reviews:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to seed reviews', details: error.message },
      { status: 500 }
    )
  }
}
