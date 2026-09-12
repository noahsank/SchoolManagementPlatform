import mongoose from 'mongoose';

const bikeRentalSchema = new mongoose.Schema(
  {
    rentalId: {
      type: String,
      unique: true,
      required: true,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Parent',
    },
    bike: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Bike',
      required: true,
    },
    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Class',
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    rentalPeriod: {
      type: String,
      enum: ['daily', 'weekly', 'monthly', 'annual'],
    },
    contractDocument: String,
    initialCondition: {
      overallCondition: String,
      photos: [String],
      damageNote: String,
    },
    finalCondition: {
      overallCondition: String,
      photos: [String],
      damageNote: String,
      returnDate: Date,
    },
    rentalRate: Number,
    totalRentalAmount: Number,
    damageCharges: {
      type: Number,
      default: 0,
    },
    lateFees: {
      type: Number,
      default: 0,
    },
    totalAmount: Number,
    amountPaid: {
      type: Number,
      default: 0,
    },
    balanceAmount: Number,
    paymentHistory: [
      {
        date: Date,
        amount: Number,
        mode: String,
        receiptNumber: String,
      },
    ],
    paymentStatus: {
      type: String,
      enum: ['pending', 'partial', 'completed', 'overdue'],
      default: 'pending',
    },
    rentalStatus: {
      type: String,
      enum: ['active', 'completed', 'cancelled', 'overdue'],
      default: 'active',
    },
    returnStatus: {
      type: String,
      enum: ['not_returned', 'returned', 'pending_verification'],
    },
    damageReport: {
      hasDamage: Boolean,
      damageType: [String],
      severity: String,
      repairEstimate: Number,
      repairCost: Number,
      repairDate: Date,
      repairInvoice: String,
    },
    notes: String,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export default mongoose.model('BikeRental', bikeRentalSchema);
