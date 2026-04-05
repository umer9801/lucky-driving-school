import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function GET() {
  try {
    console.log('🧪 Testing email configuration...')
    console.log('EMAIL_USER:', process.env.EMAIL_USER)
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '***configured***' : 'NOT SET')
    console.log('OWNER_EMAIL:', process.env.OWNER_EMAIL)

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json({
        success: false,
        error: 'Email credentials not configured',
        config: {
          EMAIL_USER: process.env.EMAIL_USER || 'NOT SET',
          EMAIL_PASS: process.env.EMAIL_PASS ? 'SET' : 'NOT SET',
          OWNER_EMAIL: process.env.OWNER_EMAIL || 'NOT SET',
        }
      })
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Verify connection
    await transporter.verify()
    console.log('✅ SMTP connection verified')

    // Send test email
    const info = await transporter.sendMail({
      from: '"Test - Lucky Driving School" <info@solvixcore.com>',
      to: process.env.OWNER_EMAIL || 'Lakshmi@luckydrivingschool.net',
      subject: '🧪 Test Email - Lucky Driving School',
      html: `
        <h1>Test Email Successful!</h1>
        <p>This is a test email from Lucky Driving School.</p>
        <p>Email configuration is working correctly.</p>
        <p>Sent at: ${new Date().toLocaleString()}</p>
      `,
    })

    console.log('✅ Test email sent:', info.messageId)

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
      messageId: info.messageId,
      config: {
        EMAIL_USER: process.env.EMAIL_USER,
        OWNER_EMAIL: process.env.OWNER_EMAIL,
      }
    })
  } catch (error: any) {
    console.error('❌ Email test failed:', error)
    return NextResponse.json({
      success: false,
      error: error.message,
      details: error.toString(),
    }, { status: 500 })
  }
}
