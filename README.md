# School Management Platform

A comprehensive, professional, modern, secure, and responsive web platform for complete school management.

## 🎯 Overview

The School Management Platform is an all-in-one solution for educational institutions to manage:
- Student enrollment and registration
- Financial management (fees, accounting, payroll)
- Academic management (grades, schedules, classes)
- Personnel management
- Bike rental system
- Library management
- Transport management
- Health center (infirmary)
- Communication and notifications
- Multi-role dashboards and portals

## ✨ Features

### Core Modules
1. **Student Management** - Complete enrollment, registration, and academic history
2. **Financial Management** - Fees, payments, accounting, and reporting
3. **Academic Management** - Grades, classes, schedules, and evaluations
4. **Personnel Management** - Teachers, staff, contracts, and attendance
5. **Bike Rental System** - Full bike fleet management with QR codes
6. **Library Management** - Book catalog, borrowing, and returns
7. **Transport Management** - Vehicles, routes, and drivers
8. **Health Center** - Medical records and emergency contacts
9. **Communication System** - Notifications, messaging, and announcements

### User Roles
- Administrator
- School Director
- Secretary/Administration
- Accountant
- Teacher/Professor
- Student
- Parent/Guardian
- Administrative Staff
- Health Personnel
- Librarian
- Transport Manager
- Bike Rental Manager

### Dashboards
- Admin Dashboard
- Director Dashboard
- Teacher Dashboard
- Student Portal
- Parent Portal
- Finance Dashboard
- Public Showcase Website

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Responsive Design** - Mobile, tablet, desktop

### Backend
- **Node.js + Express** - Server framework
- **MongoDB** - Database
- **JWT** - Authentication
- **Multer** - File uploads
- **PDFKit** - PDF generation
- **QRCode** - QR code generation
- **Nodemailer** - Email service

## 📋 Project Structure

```
SchoolManagementPlatform/
├── server/
│   ├── controllers/          # Route controllers
│   ├── models/               # MongoDB schemas
│   ├── middleware/           # Authentication & authorization
│   ├── routes/               # API routes
│   ├── utils/                # Helper functions
│   ├── services/             # Business logic
│   ├── validators/           # Data validation
│   └── config/               # Configuration files
├── client/
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── pages/            # Page components
│   │   ├── hooks/            # Custom hooks
│   │   ├── context/          # React context
│   │   ├── styles/           # CSS/Tailwind
│   │   ├── utils/            # Utility functions
│   │   ├── api/              # API calls
│   │   ├── layouts/          # Layout components
│   │   └── App.jsx
│   ├── index.html
│   └── vite.config.js
├── public/                   # Static assets
│   ├── images/
│   ├── icons/
│   └── documents/
├── uploads/                  # User uploads
├── docs/                     # Documentation
├── tests/                    # Test files
├── .env.example
├── package.json
├── server.js                 # Main server entry
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- npm >= 9
- MongoDB >= 5

### Installation

1. Clone the repository
```bash
git clone https://github.com/noahsank/SchoolManagementPlatform.git
cd SchoolManagementPlatform
```

2. Install dependencies
```bash
npm install
```

3. Configure environment
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start MongoDB
```bash
# If using local MongoDB
mongod
```

5. Run the application
```bash
# Development mode
npm run dev

# Production mode
npm start
```

6. Access the application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Admin Portal: http://localhost:3000/admin
- Parent Portal: http://localhost:3000/parent
- Student Portal: http://localhost:3000/student

## 📚 Documentation

Detailed documentation is available in the `/docs` directory:
- [API Documentation](./docs/API.md)
- [Database Schema](./docs/DATABASE.md)
- [User Roles & Permissions](./docs/ROLES_PERMISSIONS.md)
- [Setup Guide](./docs/SETUP.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)

## 🔐 Security Features

- JWT-based authentication
- Role-based access control (RBAC)
- Password encryption with bcrypt
- Secure session management
- CORS protection
- Input validation and sanitization
- Activity logging
- Data backup and recovery
- HTTPS ready

## 📊 Dashboard Features

### Statistics & Analytics
- Total students, teachers, staff counts
- Financial overview (revenue, expenses, unpaid fees)
- Attendance statistics
- Academic performance metrics
- Bike rental analytics
- Real-time alerts and notifications

### Reports & Exports
- PDF generation for documents
- Excel exports for data analysis
- Customizable reports
- Scheduled report generation

## 🔄 Workflow Examples

### Student Enrollment
1. Pre-registration → Registration → Assignment to class
2. Automatic matricule generation
3. Document upload and verification
4. Parent/guardian linking

### Bike Rental
1. Student requests bike rental
2. Contract generation
3. QR code assignment
4. Payment processing
5. Return and condition verification
6. Automatic availability update

### Grade Management
1. Teacher enters grades
2. System calculates averages
3. Student ranking
4. Report card generation
5. Parent notification

## 🌐 Responsive Design

- **Desktop** - Full-featured interface
- **Tablet** - Optimized layout
- **Mobile** - Touch-friendly navigation
- Adaptive menus and components

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Watch mode
npm run test:watch
```

## 📝 License

This project is licensed under the MIT License.

## 👥 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📧 Support

For support, email support@schoolmanagement.com or create an issue on GitHub.

## 🗂️ File Upload Limits

- Student Photos: 5MB
- Documents: 50MB
- Bulk Imports: 100MB

## 🔄 Data Backup

- Automatic daily backups
- Point-in-time recovery
- Export functionality

## 🚀 Roadmap

- [ ] Mobile App (iOS/Android)
- [ ] Advanced Analytics Dashboard
- [ ] Parent Mobile App
- [ ] Teacher Mobile App
- [ ] SMS Notifications
- [ ] Video Conferencing Integration
- [ ] Online Assessment Module
- [ ] Virtual Classroom
- [ ] Advanced Reporting Engine
- [ ] Multi-language Support

## ⚡ Performance

- Fast API response times
- Optimized database queries
- Caching strategies
- CDN-ready static assets
- Progressive Web App (PWA) capabilities

---

**Version**: 1.0.0  
**Last Updated**: 2024  
**Status**: In Development
