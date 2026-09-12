import mongoose from 'mongoose';

const transportSchema = new mongoose.Schema(
  {
    vehicleId: {
      type: String,
      unique: true,
      required: true,
    },
    registrationNumber: {
      type: String,
      unique: true,
      required: true,
    },
    vehicleType: {
      type: String,
      enum: ['bus', 'van', 'car'],
    },
    make: String,
    model: String,
    year: Number,
    color: String,
    seatingCapacity: Number,
    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    assistant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    routes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TransportRoute',
      },
    ],
    maintenance: [
      {
        date: Date,
        type: String,
        description: String,
        cost: Number,
        nextDueDate: Date,
      },
    ],
    insurance: {
      policyNumber: String,
      companyName: String,
      expiryDate: Date,
      documentUrl: String,
    },
    status: {
      type: String,
      enum: ['active', 'maintenance', 'inactive'],
      default: 'active',
    },
    fuelType: String,
    mileage: Number,
  },
  { timestamps: true }
);

export default mongoose.model('Transport', transportSchema);
