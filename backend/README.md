# Med-ware Backend

Backend API for Med-ware - Healthcare facility management system built with Node.js and Express.

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Configure your environment variables in `.env`

### Running the Server

Development mode with auto-reload:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start on `http://localhost:5000` by default.

## API Endpoints

- `GET /api/health` - Health check endpoint

## Project Structure

```
backend/
├── src/
│   ├── config/      # Configuration files
│   ├── controllers/ # Route controllers
│   ├── middleware/  # Custom middleware
│   ├── models/      # Data models
│   └── routes/      # API routes
├── server.js        # Entry point
└── package.json
```
