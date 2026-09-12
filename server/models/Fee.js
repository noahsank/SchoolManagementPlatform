import mongoose from 'mongoose';

const feeSchema = new mongoose.Schema(
  {
    feeCode: {
      type: String,
      unique: true,
      required: true,
    },
    feeName: {
      type: String,
      required: true,
    },
    description: String,
    amount: {
      type: Number,
      required: true,
    },
    applicableClass: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class',
      },
    ],
    applicableLevel: [String],
    academicYear: String,
    term: {
      type: String,
      enum: ['term1', 'term2', 'term3', 'annual'],
    },
    dueDate: Date,
    lateFeePercentage: {
      type: Number,
      default: 0,
    },
    lateFee: {
      type: Number,
      default: 0,
    },
    penalty: Number,
    isOptional: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Fee', feeSchema);
