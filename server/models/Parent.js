import mongoose from 'mongoose';

const parentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    children: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
      },
    ],
    relationship: {
      type: String,
      enum: ['father', 'mother', 'guardian', 'legal_guardian'],
      required: true,
    },
    occupation: String,
    company: String,
    workPhone: String,
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
    },
    spouseInfo: {
      name: String,
      email: String,
      phone: String,
      occupation: String,
    },
    notificationPreferences: {
      emailNotifications: { type: Boolean, default: true },
      smsNotifications: { type: Boolean, default: false },
      paymentReminders: { type: Boolean, default: true },
      attendanceAlerts: { type: Boolean, default: true },
      academicUpdates: { type: Boolean, default: true },
    },
    communicationHistory: [
      {
        date: Date,
        type: String,
        subject: String,
        message: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('Parent', parentSchema);
