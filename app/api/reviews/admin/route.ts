import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Review from '@/lib/models/Review'

// GET - Fetch all reviews (Admin only)
export async function GET() {
  try {
    await connectDB()
    const reviews = await Review.find({}).sort({ createdAt: -1 })
    
    return NextResponse.json({ success: true, reviews })
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch reviews' },
      { status: 500 }
    )
  }
}
