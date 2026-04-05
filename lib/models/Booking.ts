import mongoose, { Schema, Document } from 'mongoose'

export interface IBooking extends Document {
  courseId: string
  courseName: string
  fullName: string
  email: string
  phone: string
  experience: string
  preferredDate: string
  preferredTime: string
  licenseStatus: string
  message: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  createdAt: Date
  updatedAt: Date
}

const BookingSchema = new Schema<IBooking>(
  {
    courseId: { type: String, required: true },
    courseName: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    experience: { type: String, required: true },
    preferredDate: { type: String, required: true },
    preferredTime: { type: String, required: true },
    licenseStatus: { type: String, required: true },
    message: { type: String, default: '' },
    status: { 
      type: String, 
      enum: ['pending', 'confirmed', 'completed', 'cancelled'],
      default: 'pending' 
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Booking || mongoose.model<IBooking>('Booking', BookingSchema)
