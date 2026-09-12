import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema(
  {
    recipient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    type: {
      type: String,
      enum: ['announcement', 'payment_reminder', 'attendance_alert', 'grade_update', 'bike_rental_reminder', 'health_alert', 'event', 'system', 'other'],
    },
    title: String,
    message: String,
    relatedModule: String,
    relatedId: mongoose.Schema.Types.ObjectId,
    priority: {
      type: String,
      enum: ['low', 'medium', 'high', 'urgent'],
      default: 'medium',
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    readDate: Date,
    actionUrl: String,
    sentDate: {
      type: Date,
      default: Date.now,
    },
    expiryDate: Date,
    channels: {
      email: Boolean,
      sms: Boolean,
      inApp: {
        type: Boolean,
        default: true,
      },
    },
    status: {
      type: String,
      enum: ['sent', 'delivered', 'failed'],
      default: 'sent',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Notification', notificationSchema);
