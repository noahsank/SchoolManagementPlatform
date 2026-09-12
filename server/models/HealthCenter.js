import mongoose from 'mongoose';

const healthCenterSchema = new mongoose.Schema(
  {
    visitId: {
      type: String,
      unique: true,
      required: true,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    },
    visitDate: {
      type: Date,
      default: Date.now,
    },
    visitReason: String,
    symptoms: [String],
    temperature: Number,
    bloodPressure: String,
    heartRate: Number,
    diagnosis: String,
    treatment: String,
    prescription: String,
    medicines: [
      {
        name: String,
        dosage: String,
        frequency: String,
        duration: String,
      },
    ],
    allergies: [String],
    recordedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    followUpRequired: Boolean,
    followUpDate: Date,
    parentNotified: {
      type: Boolean,
      default: false,
    },
    notificationDate: Date,
    remarks: String,
    documentUrl: String,
  },
  { timestamps: true }
);

export default mongoose.model('HealthCenter', healthCenterSchema);
