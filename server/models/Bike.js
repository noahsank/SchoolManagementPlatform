import mongoose from 'mongoose';

const bikeSchema = new mongoose.Schema(
  {
    bikeNumber: {
      type: String,
      unique: true,
      required: true,
    },
    qrCode: {
      type: String,
      unique: true,
    },
    brand: String,
    model: String,
    color: String,
    serialNumber: {
      type: String,
      unique: true,
    },
    registrationNumber: String,
    purchaseDate: Date,
    purchasePrice: Number,
    currentValue: Number,
    condition: {
      type: String,
      enum: ['excellent', 'good', 'fair', 'poor'],
    },
    photo: String,
    status: {
      type: String,
      enum: ['available', 'rented', 'maintenance', 'damaged', 'decommissioned'],
      default: 'available',
    },
    specifications: {
      type: String,
      wheelSize: String,
      gears: Number,
      brakeType: String,
    },
    maintenance: [
      {
        date: Date,
        type: String,
        description: String,
        cost: Number,
        performedBy: String,
        nextDueDate: Date,
      },
    ],
    rentalHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BikeRental',
      },
    ],
    damageReport: [
      {
        date: Date,
        severity: String,
        description: String,
        repairCost: Number,
        repairDate: Date,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('Bike', bikeSchema);
