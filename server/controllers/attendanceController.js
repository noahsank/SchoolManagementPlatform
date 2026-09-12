// Attendance Controller
import Attendance from '../models/Attendance.js';
import Notification from '../models/Notification.js';

export const markAttendance = async (req, res) => {
  try {
    const { studentId, date, status, reason } = req.body;
    
    let attendance = await Attendance.findOne({ student: studentId, date });
    
    if (attendance) {
      attendance.status = status;
      attendance.reason = reason;
      attendance.markedBy = req.user.id;
    } else {
      attendance = new Attendance({
        student: studentId,
        date,
        status,
        reason,
        markedBy: req.user.id,
      });
    }
    
    await attendance.save();
    
    // Send notification if absent
    if (status === 'absent') {
      await Notification.create({
        recipient: studentId,
        type: 'attendance_alert',
        title: 'Absence Alert',
        message: 'Your child was marked absent today',
        priority: 'high',
      });
    }
    
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAttendance = async (req, res) => {
  try {
    const { studentId, startDate, endDate } = req.query;
    const query = {};
    
    if (studentId) query.student = studentId;
    if (startDate && endDate) {
      query.date = { $gte: new Date(startDate), $lte: new Date(endDate) };
    }
    
    const attendance = await Attendance.find(query)
      .populate('student')
      .populate('markedBy')
      .sort({ date: -1 });
    
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAttendanceReport = async (req, res) => {
  try {
    const { studentId, month, year } = req.query;
    
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);
    
    const attendance = await Attendance.find({
      student: studentId,
      date: { $gte: startDate, $lte: endDate },
    });
    
    const report = {
      present: attendance.filter(a => a.status === 'present').length,
      absent: attendance.filter(a => a.status === 'absent').length,
      late: attendance.filter(a => a.status === 'late').length,
      total: attendance.length,
      percentage: (attendance.filter(a => a.status === 'present').length / attendance.length) * 100,
    };
    
    res.json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
