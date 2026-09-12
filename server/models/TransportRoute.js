import mongoose from 'mongoose';

const transportRouteSchema = new mongoose.Schema(
  {
    routeId: {
      type: String,
      unique: true,
      required: true,
    },
    routeName: String,
    description: String,
    stops: [
      {
        stopNumber: Number,
        stopName: String,
        latitude: Number,
        longitude: Number,
        arrivalTime: String,
        departureTime: String,
      },
    ],
    pickupTime: String,
    dropoffTime: String,
    vehicle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Transport',
    },
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
      },
    ],
    fee: Number,
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
    distance: Number,
    estimatedDuration: String,
  },
  { timestamps: true }
);

export default mongoose.model('TransportRoute', transportRouteSchema);
