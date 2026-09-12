import mongoose from 'mongoose';

const gradeSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    },
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subject',
      required: true,
    },
    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Class',
      required: true,
    },
    academicYear: String,
    term: {
      type: String,
      enum: ['term1', 'term2', 'term3', 'midterm', 'final'],
    },
    assessments: [
      {
        type: String,
        marks: Number,
        totalMarks: Number,
        percentage: Number,
        date: Date,
      },
    ],
    continuous: Number,
    midterm: Number,
    practical: Number,
    project: Number,
    assignment: Number,
    attendance: Number,
    marks: Number,
    totalMarks: {
      type: Number,
      default: 100,
    },
    percentage: Number,
    grade: {
      type: String,
      enum: ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D', 'F'],
    },
    gpa: Number,
    remarks: String,
    teacherComments: String,
    status: {
      type: String,
      enum: ['pending', 'submitted', 'approved', 'rejected'],
      default: 'pending',
    },
    submittedDate: Date,
    submittedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Teacher',
    },
  },
  { timestamps: true }
);

gradeSchema.index({ student: 1, subject: 1, academicYear: 1, term: 1 }, { unique: true });

export default mongoose.model('Grade', gradeSchema);
