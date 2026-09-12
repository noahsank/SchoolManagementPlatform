import mongoose from 'mongoose';

const classSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    classCode: {
      type: String,
      unique: true,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    academicYear: String,
    section: String,
    capacity: {
      type: Number,
      default: 50,
    },
    classTeacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Teacher',
    },
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
      },
    ],
    subjects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
      },
    ],
    classroom: {
      roomNumber: String,
      building: String,
      capacity: Number,
    },
    schedule: [
      {
        day: String,
        period: Number,
        subject: String,
        teacher: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Teacher',
        },
        startTime: String,
        endTime: String,
        room: String,
      },
    ],
    examSchedule: [
      {
        subject: String,
        date: Date,
        startTime: String,
        endTime: String,
        room: String,
      },
    ],
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Class', classSchema);
