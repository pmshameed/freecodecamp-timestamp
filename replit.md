# Timestamp Microservice

## Overview
This is a FreeCodeCamp Timestamp Microservice project - a simple Express.js API that converts dates to Unix timestamps and UTC strings. The project includes a frontend interface to demonstrate the API usage.

## Project Structure
- `index.js` - Main Express server with API endpoints
- `views/index.html` - Frontend HTML page
- `public/style.css` - Styling for the frontend
- `package.json` - Node.js dependencies and scripts

## Technology Stack
- **Backend**: Node.js with Express.js
- **Frontend**: Static HTML/CSS served by Express
- **CORS**: Enabled for remote testing

## Configuration
- **Port**: 5000 (configured for Replit environment)
- **Host**: 0.0.0.0 (allows Replit proxy to work correctly)

## API Endpoints
- `GET /` - Serves the frontend HTML page
- `GET /api/hello` - Example API endpoint (returns greeting)
- `GET /api/:date` - Timestamp conversion endpoint (to be implemented)

## Recent Changes
- **2025-11-08**: Initial Replit environment setup
  - Changed port from 3000 to 5000
  - Configured server to bind to 0.0.0.0 for Replit proxy compatibility
  - Added workflow configuration for automatic server startup

## User Preferences
None specified yet.
