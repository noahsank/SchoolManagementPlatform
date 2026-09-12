// Grade Controller
import Grade from '../models/Grade.js';
import Notification from '../models/Notification.js';

export const submitGrades = async (req, res) => {
  try {
    const { studentId, subjectId, classId, marks, totalMarks, term } = req.body;
    
    const grade = new Grade({
      student: studentId,
      subject: subjectId,
      class: classId,
      marks,
      totalMarks,
      term,
      percentage: (marks / totalMarks) * 100,
      submittedBy: req.user.id,
      submittedDate: new Date(),
    });
    
    // Calculate grade
    const percentage = (marks / totalMarks) * 100;
    if (percentage >= 90) grade.grade = 'A+';
    else if (percentage >= 85) grade.grade = 'A';
    else if (percentage >= 80) grade.grade = 'A-';
    else if (percentage >= 75) grade.grade = 'B+';
    else if (percentage >= 70) grade.grade = 'B';
    else if (percentage >= 65) grade.grade = 'B-';
    else if (percentage >= 60) grade.grade = 'C+';
    else if (percentage >= 55) grade.grade = 'C';
    else if (percentage >= 50) grade.grade = 'C-';
    else if (percentage >= 40) grade.grade = 'D';
    else grade.grade = 'F';
    
    grade.gpa = (percentage / 100) * 4;
    
    await grade.save();
    
    // Send notification
    await Notification.create({
      recipient: studentId,
      type: 'grade_update',
      title: 'New Grade Posted',
      message: `Your grade for ${term} has been posted`,
      priority: 'medium',
    });
    
    res.status(201).json(grade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getGrades = async (req, res) => {
  try {
    const { studentId, classId, term } = req.query;
    const query = {};
    
    if (studentId) query.student = studentId;
    if (classId) query.class = classId;
    if (term) query.term = term;
    
    const grades = await Grade.find(query)
      .populate('student')
      .populate('subject')
      .populate('class')
      .populate('submittedBy');
    
    res.json(grades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const approveGrades = async (req, res) => {
  try {
    const grade = await Grade.findByIdAndUpdate(
      req.params.id,
      { status: 'approved' },
      { new: true }
    );
    res.json(grade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStudentTranscript = async (req, res) => {
  try {
    const grades = await Grade.find({ 
      student: req.params.studentId,
      status: 'approved'
    }).populate('subject');
    
    const transcript = {
      totalGPA: (grades.reduce((acc, g) => acc + g.gpa, 0) / grades.length).toFixed(2),
      grades,
    };
    
    res.json(transcript);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
