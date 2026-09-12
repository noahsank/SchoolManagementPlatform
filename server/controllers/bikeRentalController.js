// Bike Rental Controller
import BikeRental from '../models/BikeRental.js';
import Bike from '../models/Bike.js';
import Notification from '../models/Notification.js';

export const createRental = async (req, res) => {
  try {
    const { studentId, bikeId, startDate, endDate, rentalPeriod, rentalRate } = req.body;
    
    const bike = await Bike.findById(bikeId);
    if (bike.status !== 'available') {
      return res.status(400).json({ message: 'Bike is not available' });
    }
    
    const rentalId = `RENTAL-${Date.now()}`;
    const rental = new BikeRental({
      rentalId,
      student: studentId,
      bike: bikeId,
      startDate,
      endDate,
      rentalPeriod,
      rentalRate,
      totalRentalAmount: rentalRate,
      rentalStatus: 'active',
    });
    
    await rental.save();
    bike.status = 'rented';
    await bike.save();
    
    res.status(201).json(rental);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const returnBike = async (req, res) => {
  try {
    const { rentalId, condition, damageNote, photos } = req.body;
    
    const rental = await BikeRental.findOne({ rentalId });
    if (!rental) return res.status(404).json({ message: 'Rental not found' });
    
    rental.finalCondition = {
      overallCondition: condition,
      photos,
      damageNote,
      returnDate: new Date(),
    };
    
    rental.returnStatus = 'returned';
    rental.rentalStatus = 'completed';
    
    // Calculate damages if any
    if (condition === 'damaged' && damageNote) {
      rental.damageReport.hasDamage = true;
      rental.damageCharges = 50; // Example charge
    }
    
    rental.totalAmount = rental.totalRentalAmount + rental.damageCharges + rental.lateFees;
    rental.balanceAmount = rental.totalAmount - rental.amountPaid;
    
    await rental.save();
    
    const bike = await Bike.findById(rental.bike);
    bike.status = 'available';
    await bike.save();
    
    res.json(rental);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRentals = async (req, res) => {
  try {
    const { status, studentId } = req.query;
    const query = {};
    
    if (status) query.rentalStatus = status;
    if (studentId) query.student = studentId;
    
    const rentals = await BikeRental.find(query)
      .populate('student')
      .populate('bike')
      .populate('class');
    
    res.json(rentals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const recordPayment = async (req, res) => {
  try {
    const { rentalId, amount, mode, receiptNumber } = req.body;
    
    const rental = await BikeRental.findOne({ rentalId });
    if (!rental) return res.status(404).json({ message: 'Rental not found' });
    
    rental.paymentHistory.push({
      date: new Date(),
      amount,
      mode,
      receiptNumber,
    });
    
    rental.amountPaid += amount;
    rental.balanceAmount = rental.totalAmount - rental.amountPaid;
    
    if (rental.balanceAmount === 0) {
      rental.paymentStatus = 'completed';
    } else if (rental.amountPaid > 0) {
      rental.paymentStatus = 'partial';
    }
    
    await rental.save();
    res.json(rental);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
