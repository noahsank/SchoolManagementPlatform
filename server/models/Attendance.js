import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    },
    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Class',
    },
    date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ['present', 'absent', 'late', 'halfday', 'excused'],
      required: true,
    },
    timeIn: String,
    timeOut: String,
    reason: String,
    parentNotified: {
      type: Boolean,
      default: false,
    },
    documentUrl: String,
    remarks: String,
    markedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    modificationHistory: [
      {
        date: Date,
        oldStatus: String,
        newStatus: String,
        modifiedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
        reason: String,
      },
    ],
  },
  { timestamps: true }
);

attendanceSchema.index({ student: 1, date: 1 }, { unique: true });

export default mongoose.model('Attendance', attendanceSchema);
