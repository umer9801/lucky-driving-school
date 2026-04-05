import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'

export async function GET() {
  try {
    console.log('Testing MongoDB connection...')
    console.log('MONGODB_URI exists:', !!process.env.MONGODB_URI)
    
    await connectDB()
    
    return NextResponse.json({
      success: true,
      message: 'MongoDB connected successfully! ✅'
    })
  } catch (error: any) {
    console.error('MongoDB connection failed:', error)
    return NextResponse.json({
      success: false,
      error: error.message,
      details: error.toString()
    }, { status: 500 })
  }
}
