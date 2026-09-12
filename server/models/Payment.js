import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema(
  {
    paymentId: {
      type: String,
      unique: true,
      required: true,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    },
    fees: [
      {
        fee: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Fee',
        },
        amount: Number,
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    amountPaid: {
      type: Number,
      default: 0,
    },
    balanceAmount: Number,
    paymentMode: {
      type: String,
      enum: ['cash', 'cheque', 'bank_transfer', 'card', 'online', 'mobile_payment'],
    },
    transactionId: String,
    paymentStatus: {
      type: String,
      enum: ['pending', 'partial', 'completed', 'failed', 'refunded'],
      default: 'pending',
    },
    paymentDate: Date,
    receiptNumber: String,
    paymentHistory: [
      {
        date: Date,
        amount: Number,
        mode: String,
        transactionId: String,
        receiptNumber: String,
      },
    ],
    remarks: String,
    verifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    verificationDate: Date,
  },
  { timestamps: true }
);

export default mongoose.model('Payment', paymentSchema);
