# Med-ware

Med-ware is a healthcare facility management system designed specifically for hospitals, clinics, and other health facilities. The platform simplifies communication, appointments, and other healthcare management tasks between patients and healthcare providers.

## Project Structure

This project is organized into two main directories:

### Backend (Node.js)
Located in `/backend` - RESTful API server built with Node.js and Express.

**Tech Stack:**
- Node.js
- Express.js
- CORS support
- Environment configuration with dotenv

[Backend Documentation](./backend/README.md)

### Frontend (Vite + React TypeScript + Tailwind CSS)
Located in `/frontend` - Modern web interface built with Vite, React, TypeScript, and Tailwind CSS.

**Tech Stack:**
- Vite
- React 19
- TypeScript
- Tailwind CSS

[Frontend Documentation](./frontend/README.md)

## Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/collinswachira-alt/Med-ware.git
cd Med-ware
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

### Running the Application

#### Backend Server
```bash
cd backend
npm run dev
```
The backend server will run on `http://localhost:5000`

#### Frontend Application
```bash
cd frontend
npm run dev
```
The frontend application will run on `http://localhost:5173`

## Features

- **Healthcare Facility Management** - Tools designed specifically for hospitals and clinics
- **Appointment Scheduling** - Streamlined appointment management system
- **Patient Communication** - Enhanced communication between patients and healthcare providers
- **Modern UI** - Responsive design with Tailwind CSS
- **Type Safety** - Full TypeScript support for better development experience

## Project Goals

This platform is intended solely for healthcare facilities including:
- Hospitals
- Clinics
- Medical centers
- Other health facilities

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC
