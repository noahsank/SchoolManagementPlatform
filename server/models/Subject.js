import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    subjectCode: {
      type: String,
      unique: true,
      required: true,
    },
    description: String,
    category: String,
    creditHours: Number,
    syllabus: String,
    textbooks: [String],
    teachers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
      },
    ],
    classes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class',
      },
    ],
    assessmentTypes: [
      {
        type: String,
        weightage: Number,
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

export default mongoose.model('Subject', subjectSchema);
