// Simple mailto-based email system - No external service needed!

export function createBookingEmailForUser(booking: {
  fullName: string
  email: string
  courseName: string
  preferredDate: string
  preferredTime: string
}) {
  const subject = '🎉 Booking Confirmed - Lucky Driving School'
  const body = `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚗 LUCKY DRIVING SCHOOL
    Your Journey to Safe Driving Starts Here!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dear ${booking.fullName},

🎉 CONGRATULATIONS! Your booking has been confirmed!

Thank you for choosing Lucky Driving School. We're excited to help you become a confident and safe driver.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 YOUR BOOKING DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Course Selected: ${booking.courseName}
✓ Preferred Date: ${booking.preferredDate}
✓ Preferred Time: ${booking.preferredTime}
✓ Booking Status: CONFIRMED ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 WHAT HAPPENS NEXT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1️⃣ CONFIRMATION CALL
   Our team will contact you within 24 hours to confirm 
   your schedule and answer any questions.

2️⃣ INSTRUCTOR ASSIGNMENT
   You'll receive your instructor's details before your 
   first lesson, including their name and contact info.

3️⃣ FIRST LESSON
   Please arrive 10 minutes early for your first session.
   Bring your learner's permit (if applicable).

4️⃣ LEARNING MATERIALS
   We'll provide all necessary learning materials and 
   resources during your course.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📞 NEED HELP? CONTACT US ANYTIME!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📱 Phone: +1 (780) 255-2999
💬 WhatsApp: +1 (587) 712-4929
📧 Email: Lakshmi@luckydrivingschool.net

🏢 Office Address:
   3119 158 Street SW
   Edmonton AB T6W5C9

⏰ Business Hours:
   Monday - Saturday: 7:00 AM - 6:30 PM
   Sunday: Holiday

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 QUICK TIPS FOR YOUR SUCCESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Stay relaxed and focused during lessons
✓ Practice regularly between sessions
✓ Ask questions - no question is too small!
✓ Review traffic rules and road signs
✓ Get plenty of rest before driving lessons

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌟 WHY CHOOSE LUCKY DRIVING SCHOOL?

✓ Experienced & Certified Instructors
✓ Modern, Well-Maintained Vehicles
✓ Flexible Scheduling Options
✓ High Success Rate
✓ Personalized Learning Approach
✓ Affordable Pricing

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Thank you for trusting Lucky Driving School with your 
driver education. We're committed to making you a safe 
and confident driver!

Safe Driving Starts Here! 🚗💨

Best Regards,
Lucky Driving School Team

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
© ${new Date().getFullYear()} Lucky Driving School. All Rights Reserved.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`

  return {
    to: booking.email,
    subject: encodeURIComponent(subject),
    body: encodeURIComponent(body),
  }
}

export function createBookingEmailForOwner(booking: {
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
  const subject = '� NEW BOOKING ALERT - Lucky Driving School'
  const body = `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚗 LUCKY DRIVING SCHOOL - ADMIN NOTIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 NEW BOOKING RECEIVED!

A new student has just booked a driving course through 
your website. Please review the details below and contact 
them within 24 hours.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 CUSTOMER INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name:           ${booking.fullName}
Email:          ${booking.email}
Phone:          ${booking.phone}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 BOOKING DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Course:         ${booking.courseName}
Preferred Date: ${booking.preferredDate}
Preferred Time: ${booking.preferredTime}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎓 STUDENT PROFILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Experience Level: ${booking.experience.toUpperCase()}
License Status:   ${booking.licenseStatus.replace(/-/g, ' ').toUpperCase()}

${booking.message ? `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 SPECIAL REQUESTS / NOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${booking.message}

` : ''}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ ACTION REQUIRED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1️⃣ CONTACT CUSTOMER
   Call ${booking.fullName} at ${booking.phone}
   within 24 hours to confirm booking

2️⃣ CONFIRM SCHEDULE
   Verify the preferred date and time slot
   Make adjustments if needed

3️⃣ ASSIGN INSTRUCTOR
   Match student with appropriate instructor
   based on experience level and availability

4️⃣ UPDATE SYSTEM
   Log into admin dashboard and update
   booking status to "CONFIRMED"

5️⃣ SEND DETAILS
   Provide instructor info and final schedule
   to the customer

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📞 QUICK CONTACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Customer Phone: ${booking.phone}
Customer Email: ${booking.email}

Call Now: tel:${booking.phone}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🖥️ ADMIN DASHBOARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

View full booking details and manage status:
👉 Login to your admin dashboard
👉 Navigate to Bookings section
👉 Update status and add notes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⏰ Booking Received: ${new Date().toLocaleString('en-US', { 
    dateStyle: 'full', 
    timeStyle: 'short' 
  })}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This is an automated notification from Lucky Driving 
School booking system.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`

  return {
    to: 'Lakshmi@luckydrivingschool.net',
    subject: encodeURIComponent(subject),
    body: encodeURIComponent(body),
  }
}

export function createContactEmailForUser(contact: {
  fullName: string
  email: string
  subject: string
}) {
  const emailSubject = '✉️ Message Received - Lucky Driving School'
  const body = `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚗 LUCKY DRIVING SCHOOL
    We've Received Your Message!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dear ${contact.fullName},

Thank you for reaching out to Lucky Driving School! 

✅ Your message has been successfully received and our 
   team is reviewing it right now.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 MESSAGE DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Subject: ${contact.subject}
Received: ${new Date().toLocaleString('en-US', { 
    dateStyle: 'full', 
    timeStyle: 'short' 
  })}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏰ WHAT TO EXPECT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📧 RESPONSE TIME
   Our team will review your message and respond within 
   24 hours during business hours.

📞 FOLLOW-UP
   If your inquiry is urgent, we may call you directly
   for a faster resolution.

✅ CONFIRMATION
   You'll receive a detailed response via email to the
   address you provided.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🕐 BUSINESS HOURS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Monday - Saturday:  7:00 AM - 6:30 PM
Sunday:             Holiday (Closed)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📞 NEED IMMEDIATE ASSISTANCE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If your matter is urgent, please feel free to contact 
us directly:

📱 Phone:    +1 (780) 255-2999
💬 WhatsApp: +1 (587) 712-4929
📧 Email:    Lakshmi@luckydrivingschool.net

🏢 Visit Us:
   3119 158 Street SW
   Edmonton AB T6W5C9

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌟 WHILE YOU WAIT...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📚 Browse Our Courses
   Visit our website to explore our comprehensive 
   driving course offerings

⭐ Read Reviews
   See what our satisfied students have to say about
   their experience with us

📱 Follow Us
   Stay updated with driving tips and school news on
   our social media channels

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Thank you for choosing Lucky Driving School. We look 
forward to helping you achieve your driving goals!

Best Regards,
Lucky Driving School Team

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
© ${new Date().getFullYear()} Lucky Driving School. All Rights Reserved.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`

  return {
    to: contact.email,
    subject: encodeURIComponent(emailSubject),
    body: encodeURIComponent(body),
  }
}

export function createContactEmailForOwner(contact: {
  fullName: string
  email: string
  phone: string
  subject: string
  message: string
}) {
  const emailSubject = '📧 NEW CONTACT MESSAGE - Lucky Driving School'
  const body = `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚗 LUCKY DRIVING SCHOOL - ADMIN NOTIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 NEW CONTACT MESSAGE RECEIVED!

Someone has submitted a message through your website 
contact form. Please review and respond promptly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 SENDER INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name:    ${contact.fullName}
Email:   ${contact.email}
Phone:   ${contact.phone || 'Not provided'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 MESSAGE DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Subject: ${contact.subject}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 MESSAGE CONTENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${contact.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ ACTION REQUIRED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1️⃣ REVIEW MESSAGE
   Read the message carefully and understand the
   customer's inquiry or concern

2️⃣ RESPOND PROMPTLY
   Reply to ${contact.email} within 24 hours
   during business hours

3️⃣ FOLLOW UP
   If phone number is provided, consider calling
   for urgent matters: ${contact.phone || 'N/A'}

4️⃣ UPDATE STATUS
   Mark as "Replied" in admin dashboard after
   responding to the customer

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📞 QUICK CONTACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply to:  ${contact.email}
${contact.phone ? `Call:      ${contact.phone}` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🖥️ ADMIN DASHBOARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

View full message details and manage status:
👉 Login to your admin dashboard
👉 Navigate to Contacts section
👉 Update status and add response notes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 MESSAGE PRIORITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Based on subject: ${contact.subject}

Suggested Priority: ${
  contact.subject.toLowerCase().includes('urgent') || 
  contact.subject.toLowerCase().includes('emergency') 
    ? '🔴 HIGH - Respond ASAP' 
    : contact.subject.toLowerCase().includes('question') ||
      contact.subject.toLowerCase().includes('inquiry')
    ? '🟡 MEDIUM - Respond within 24 hours'
    : '🟢 NORMAL - Respond within 24 hours'
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⏰ Message Received: ${new Date().toLocaleString('en-US', { 
    dateStyle: 'full', 
    timeStyle: 'short' 
  })}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This is an automated notification from Lucky Driving 
School contact form system.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`

  return {
    to: 'Lakshmi@luckydrivingschool.net',
    subject: encodeURIComponent(emailSubject),
    body: encodeURIComponent(body),
  }
}
