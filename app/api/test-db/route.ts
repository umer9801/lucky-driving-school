import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'

export async function GET() {
  try {
    // Try to connect to MongoDB
    await connectDB()
    
    return NextResponse.json({ 
      success: true, 
      message: '✅ MongoDB Connected Successfully!',
      timestamp: new Date().toISOString()
    })
  } catch (error: any) {
    return NextResponse.json({ 
      success: false, 
      message: '❌ MongoDB Connection Failed',
      error: error.message 
    }, { status: 500 })
  }
}
