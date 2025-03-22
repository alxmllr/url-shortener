# URL Shortener API

A REST API built with Node.js and Express following Clean Architecture principles.

## Project Structure

```
src/
├── config/         # Configuration files
├── controllers/    # Request handlers
├── models/         # Data models
├── repositories/   # Data access layer
├── routes/         # Route definitions
├── services/       # Business logic
└── index.js        # Application entry point
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

The server will start on port 3000 (or the port specified in the PORT environment variable).

## Available Endpoints

### Health Check

- `GET /api/health/hello` - Returns a "Hello World" message

## Development

- `npm run dev` - Start the development server with hot reload
- `npm start` - Start the production server
- `npm test` - Run tests
