import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    employeeNumber: {
      type: String,
      unique: true,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    specialization: [String],
    subjects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
      },
    ],
    classes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class',
      },
    ],
    isClassTeacher: Boolean,
    classTeacherOf: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Class',
    },
    joiningDate: Date,
    endDate: Date,
    contractType: {
      type: String,
      enum: ['permanent', 'contract', 'temporary'],
    },
    salary: {
      baseSalary: Number,
      allowances: Number,
      deductions: Number,
      netSalary: Number,
    },
    bankDetails: {
      accountNumber: String,
      bankName: String,
      ifscCode: String,
    },
    workingHours: {
      startTime: String,
      endTime: String,
      daysPerWeek: Number,
    },
    schedule: [
      {
        day: String,
        period: Number,
        subject: String,
        class: String,
        room: String,
      },
    ],
    attendance: [
      {
        date: Date,
        status: {
          type: String,
          enum: ['present', 'absent', 'late', 'leave'],
        },
        leaveType: String,
      },
    ],
    leaves: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Leave',
      },
    ],
    qualifications: [
      {
        degree: String,
        institution: String,
        year: Number,
        certificateUrl: String,
      },
    ],
    experience: {
      totalYears: Number,
      previousSchools: [String],
    },
    status: {
      type: String,
      enum: ['active', 'on_leave', 'inactive', 'retired'],
      default: 'active',
    },
    performanceReviews: [
      {
        date: Date,
        reviewer: String,
        rating: Number,
        comments: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('Teacher', teacherSchema);
