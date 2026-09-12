import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    matriculeNumber: {
      type: String,
      unique: true,
      required: true,
    },
    dateOfBirth: Date,
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
    },
    nationality: String,
    placeOfBirth: String,
    photo: String,
    bloodType: String,
    medicalConditions: [String],
    allergies: [String],
    guardians: [
      {
        name: String,
        relationship: String,
        email: String,
        phone: String,
        address: String,
      },
    ],
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
    },
    emergencyContacts: [
      {
        name: String,
        relationship: String,
        phone: String,
      },
    ],
    academicYear: String,
    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Class',
    },
    level: String,
    registrationType: {
      type: String,
      enum: ['new', 're-registration', 'transfer'],
    },
    enrollmentDate: Date,
    previousSchool: String,
    documents: [
      {
        type: String,
        url: String,
        uploadDate: Date,
      },
    ],
    status: {
      type: String,
      enum: ['active', 'inactive', 'graduated', 'transferred', 'suspended'],
      default: 'active',
    },
    academicHistory: [
      {
        academicYear: String,
        class: String,
        averageGrade: Number,
        ranking: Number,
        promoted: Boolean,
      },
    ],
    bikeRental: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BikeRental',
    },
    transportAssignment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'TransportRoute',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Student', studentSchema);
