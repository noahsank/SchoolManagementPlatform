import mongoose from 'mongoose';

const libraryBorrowSchema = new mongoose.Schema(
  {
    borrowId: {
      type: String,
      unique: true,
      required: true,
    },
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Library',
      required: true,
    },
    borrower: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    borrowDate: {
      type: Date,
      default: Date.now,
    },
    dueDate: Date,
    returnDate: Date,
    status: {
      type: String,
      enum: ['borrowed', 'returned', 'overdue', 'lost'],
      default: 'borrowed',
    },
    renewalCount: {
      type: Number,
      default: 0,
    },
    renewalHistory: [
      {
        renewalDate: Date,
        newDueDate: Date,
      },
    ],
    fineAmount: {
      type: Number,
      default: 0,
    },
    finePaid: {
      type: Boolean,
      default: false,
    },
    remarks: String,
    borrowedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export default mongoose.model('LibraryBorrow', libraryBorrowSchema);
