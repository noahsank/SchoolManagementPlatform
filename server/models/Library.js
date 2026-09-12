import mongoose from 'mongoose';

const librarySchema = new mongoose.Schema(
  {
    bookId: {
      type: String,
      unique: true,
      required: true,
    },
    isbn: {
      type: String,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: [String],
    publisher: String,
    publicationYear: Number,
    edition: String,
    category: String,
    subcategory: String,
    description: String,
    pages: Number,
    language: String,
    coverImage: String,
    quantity: {
      total: Number,
      available: Number,
      borrowed: Number,
    },
    location: {
      shelf: String,
      section: String,
      aisle: String,
    },
    acquisitionDate: Date,
    price: Number,
    supplier: String,
    condition: {
      type: String,
      enum: ['excellent', 'good', 'fair', 'poor'],
    },
    renewalCount: {
      type: Number,
      default: 0,
    },
    maxRenewal: {
      type: Number,
      default: 3,
    },
    loanPeriod: {
      type: Number,
      default: 14,
    },
    borrowingHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'LibraryBorrow',
      },
    ],
    status: {
      type: String,
      enum: ['available', 'borrowed', 'reserved', 'damaged', 'lost', 'withdrawn'],
      default: 'available',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Library', librarySchema);
