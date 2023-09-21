# Otp-Based_Registration


## Table of Contents

- [API Documentation](#api-documentation)
- [Endpoints](#endpoints)
- [Installation](#installation)


## API Documentation

Published postman documentation of https://documenter.getpostman.com/view/20576167/2s9YCARqVj


### Endpoints

List and describe the available API endpoints here.

### `/sendOtp` - post request
- POST `/user/sendOtp` - send otp using Twilio library.
#### `/details` - POST Request
- POST `/users/register` - user can register after otp validation.

### Features 
- The user can register only if their mobile is verified.
- After successful registration gets deleted from the table.
- The otp gets deleted automatically after 5 minutes(valid only for 5 minutes)
...

## Installation
1. Ensure you have Node.js, Nodemon, Express, Twilio, , and mongoose installed on your system.
2. Clone the repository: `https://github.com/codingXpert/Otp-based-registration-`
3. Install the dependencies: `npm install`
4. Start the server: `npm start`
5. The API will be available at `http://localhost:8000`.