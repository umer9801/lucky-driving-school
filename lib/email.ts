import nodemailer from 'nodemailer'

// Create transporter with Hostinger SMTP
const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('⚠️ Email credentials not configured. Emails will not be sent.')
    console.warn('Missing env vars:', {
      EMAIL_USER: !!process.env.EMAIL_USER,
      EMAIL_PASS: !!process.env.EMAIL_PASS,
      SMTP_HOST: !!process.env.SMTP_HOST,
      SMTP_PORT: !!process.env.SMTP_PORT,
    })
    return null
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) === 465 : true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    connectionTimeout: 10000, // 10 seconds
    socketTimeout: 10000, // 10 seconds
  })
}

const transporter = createTransporter()

// Email to User - Booking Confirmation
export async function sendBookingConfirmationToUser(booking: {
  fullName: string
  email: string
  courseName: string
  preferredDate: string
  preferredTime: string
}) {
  const mailOptions = {
    from: '"Lakshmi - Lucky Driving School" <info@solvixcore.com>',
    replyTo: 'Lakshmi@luckydrivingschool.net',
    to: booking.email,
    subject: '🎉 Booking Confirmed - Lucky Driving School',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1e3a8a 0%, #dc2626 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
          .info-box { background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #1e3a8a; border-radius: 5px; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Booking Confirmed!</h1>
          </div>
          <div class="content">
            <p>Dear <strong>${booking.fullName}</strong>,</p>
            <p>Thank you for choosing Lucky Driving School! Your booking has been confirmed.</p>
            
            <div class="info-box">
              <h3 style="color: #1e3a8a; margin-top: 0;">Booking Details:</h3>
              <p><strong>Course:</strong> ${booking.courseName}</p>
              <p><strong>Preferred Date:</strong> ${booking.preferredDate}</p>
              <p><strong>Preferred Time:</strong> ${booking.preferredTime}</p>
            </div>

            <p><strong>What's Next?</strong></p>
            <ul>
              <li>We'll call you within 24 hours to confirm your booking</li>
              <li>You'll receive instructor details before your first lesson</li>
              <li>Please arrive 10 minutes early for your first session</li>
            </ul>

            <p>If you have any questions, feel free to contact us:</p>
            <p>📧 Email: Lakshmi@luckydrivingschool.net<br>
            💬 WhatsApp: +1 (587) 712-4929</p>
          </div>
          <div class="footer">
            <p>Lucky Driving School<br>
            3119 158 Street SW, Edmonton AB T6W5C9<br>
            © ${new Date().getFullYear()} All rights reserved</p>
          </div>
        </div>
      </body>
      </html>
    `,
  }

  try {
    if (!transporter) {
      console.warn('⚠️ Email not sent - transporter not configured')
      return
    }
    
    // Wrap in Promise to ensure email is sent before serverless function ends
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error('❌ Error sending booking confirmation:', err)
          reject(err)
        } else {
          console.log('✅ Booking confirmation email sent:', info.messageId)
          resolve(info)
        }
      })
    })
  } catch (error) {
    console.error('❌ Error sending email to user:', error)
    // Don't throw error - allow booking to succeed even if email fails
  }
}

// Email to Owner - New Booking Notification
export async function sendBookingNotificationToOwner(booking: {
  fullName: string
  email: string
  phone: string
  courseName: string
  preferredDate: string
  preferredTime: string
  experience: string
  licenseStatus: string
  message: string
}) {
  const mailOptions = {
    from: '"Lucky Driving School System" <info@solvixcore.com>',
    replyTo: 'Lakshmi@luckydrivingschool.net',
    to: process.env.OWNER_EMAIL || 'Lakshmi@luckydrivingschool.net',
    subject: '🚨 NEW BOOKING ALERT - Lucky Driving School',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #dc2626 0%, #1e3a8a 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
          .info-box { background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #dc2626; border-radius: 5px; }
          .detail-row { padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
          .detail-row:last-child { border-bottom: none; }
          .label { font-weight: bold; color: #1e3a8a; display: inline-block; width: 150px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✓ New Booking Alert!</h1>
          </div>
          <div class="content">
            <p><strong>A new booking has been received!</strong></p>
            
            <div class="info-box">
              <h3 style="color: #dc2626; margin-top: 0;">Customer Information:</h3>
              <div class="detail-row">
                <span class="label">Name:</span>
                <span>${booking.fullName}</span>
              </div>
              <div class="detail-row">
                <span class="label">Email:</span>
                <span>${booking.email}</span>
              </div>
              <div class="detail-row">
                <span class="label">Phone:</span>
                <span>${booking.phone}</span>
              </div>
            </div>

            <div class="info-box">
              <h3 style="color: #dc2626; margin-top: 0;">Booking Details:</h3>
              <div class="detail-row">
                <span class="label">Course:</span>
                <span>${booking.courseName}</span>
              </div>
              <div class="detail-row">
                <span class="label">Preferred Date:</span>
                <span>${booking.preferredDate}</span>
              </div>
              <div class="detail-row">
                <span class="label">Preferred Time:</span>
                <span>${booking.preferredTime}</span>
              </div>
              <div class="detail-row">
                <span class="label">Experience:</span>
                <span>${booking.experience}</span>
              </div>
              <div class="detail-row">
                <span class="label">License Status:</span>
                <span>${booking.licenseStatus}</span>
              </div>
            </div>

            ${booking.message ? `
            <div class="info-box">
              <h3 style="color: #dc2626; margin-top: 0;">Special Requests:</h3>
              <p>${booking.message}</p>
            </div>
            ` : ''}

            <p><strong>Action Required:</strong></p>
            <ul>
              <li>Contact the customer within 24 hours</li>
              <li>Confirm the booking schedule</li>
              <li>Assign an instructor</li>
              <li>Update booking status in admin panel</li>
            </ul>
          </div>
        </div>
      </body>
      </html>
    `,
  }

  try {
    if (!transporter) {
      console.warn('⚠️ Email not sent - transporter not configured')
      return
    }
    
    // Wrap in Promise to ensure email is sent before serverless function ends
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error('❌ Error sending booking notification:', err)
          reject(err)
        } else {
          console.log('✅ Booking notification email sent:', info.messageId)
          resolve(info)
        }
      })
    })
  } catch (error) {
    console.error('❌ Error sending email to owner:', error)
    // Don't throw error - allow booking to succeed even if email fails
  }
}

// Email to User - Contact Form Confirmation
export async function sendContactConfirmationToUser(contact: {
  fullName: string
  email: string
  subject: string
}) {
  const mailOptions = {
    from: '"Lakshmi - Lucky Driving School" <info@solvixcore.com>',
    replyTo: 'Lakshmi@luckydrivingschool.net',
    to: contact.email,
    subject: '✉️ Message Received - Lucky Driving School',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1e3a8a 0%, #dc2626 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
          .info-box { background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #1e3a8a; border-radius: 5px; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✉️ Message Received!</h1>
          </div>
          <div class="content">
            <p>Dear <strong>${contact.fullName}</strong>,</p>
            <p>Thank you for contacting Lucky Driving School! We have received your message regarding "<strong>${contact.subject}</strong>".</p>
            
            <div class="info-box">
              <p>Our team will review your message and get back to you within 24 hours during business hours.</p>
              <p><strong>Business Hours:</strong><br>
              Monday - Saturday: 7:00 AM - 6:30 PM<br>
              Sunday: Holiday</p>
            </div>

            <p>If you need immediate assistance, please feel free to contact us:</p>
            <p>💬 WhatsApp: +1 (587) 712-4929</p>
          </div>
          <div class="footer">
            <p>Lucky Driving School<br>
            © ${new Date().getFullYear()} All rights reserved</p>
          </div>
        </div>
      </body>
      </html>
    `,
  }

  try {
    if (!transporter) {
      console.warn('⚠️ Email not sent - transporter not configured')
      return
    }
    
    // Wrap in Promise to ensure email is sent before serverless function ends
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error('❌ Error sending contact confirmation:', err)
          reject(err)
        } else {
          console.log('✅ Contact confirmation email sent:', info.messageId)
          resolve(info)
        }
      })
    })
  } catch (error) {
    console.error('❌ Error sending email to user:', error)
    // Don't throw error - allow contact to succeed even if email fails
  }
}

// Email to Owner - New Contact Message
export async function sendContactNotificationToOwner(contact: {
  fullName: string
  email: string
  phone: string
  subject: string
  message: string
}) {
  const mailOptions = {
    from: '"Lucky Driving School System" <info@solvixcore.com>',
    replyTo: 'Lakshmi@luckydrivingschool.net',
    to: process.env.OWNER_EMAIL || 'Lakshmi@luckydrivingschool.net',
    subject: '📧 NEW CONTACT MESSAGE - Lucky Driving School',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #dc2626 0%, #1e3a8a 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
          .info-box { background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #dc2626; border-radius: 5px; }
          .detail-row { padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
          .detail-row:last-child { border-bottom: none; }
          .label { font-weight: bold; color: #1e3a8a; display: inline-block; width: 120px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>💬 New Contact Message!</h1>
          </div>
          <div class="content">
            <p><strong>A new contact message has been received!</strong></p>
            
            <div class="info-box">
              <h3 style="color: #dc2626; margin-top: 0;">Contact Information:</h3>
              <div class="detail-row">
                <span class="label">Name:</span>
                <span>${contact.fullName}</span>
              </div>
              <div class="detail-row">
                <span class="label">Email:</span>
                <span>${contact.email}</span>
              </div>
              <div class="detail-row">
                <span class="label">Phone:</span>
                <span>${contact.phone || 'Not provided'}</span>
              </div>
              <div class="detail-row">
                <span class="label">Subject:</span>
                <span>${contact.subject}</span>
              </div>
            </div>

            <div class="info-box">
              <h3 style="color: #dc2626; margin-top: 0;">Message:</h3>
              <p>${contact.message}</p>
            </div>

            <p><strong>Action Required:</strong> Reply to this message within 24 hours.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  }

  try {
    if (!transporter) {
      console.warn('⚠️ Email not sent - transporter not configured')
      return
    }
    
    // Wrap in Promise to ensure email is sent before serverless function ends
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error('❌ Error sending contact notification:', err)
          reject(err)
        } else {
          console.log('✅ Contact notification email sent:', info.messageId)
          resolve(info)
        }
      })
    })
  } catch (error) {
    console.error('❌ Error sending email to owner:', error)
    // Don't throw error - allow contact to succeed even if email fails
  }
}
