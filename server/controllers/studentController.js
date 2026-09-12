// Student Controller
import Student from '../models/Student.js';

export const createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStudents = async (req, res) => {
  try {
    const students = await Student.find()
      .populate('userId')
      .populate('class')
      .populate('bikeRental')
      .populate('transportAssignment');
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id)
      .populate('userId')
      .populate('class')
      .populate('bikeRental')
      .populate('transportAssignment');
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .populate('userId')
      .populate('class');
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStudentsByClass = async (req, res) => {
  try {
    const students = await Student.find({ class: req.params.classId })
      .populate('userId')
      .populate('class');
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
