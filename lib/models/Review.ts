import mongoose, { Schema, Document } from 'mongoose'

export interface IReview extends Document {
  name: string
  email: string
  rating: number
  comment: string
  status: 'pending' | 'approved' | 'rejected'
  isGoogleReview: boolean
  createdAt: Date
  updatedAt: Date
}

const ReviewSchema = new Schema<IReview>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    status: { 
      type: String, 
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending' 
    },
    isGoogleReview: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Review || mongoose.model<IReview>('Review', ReviewSchema)
