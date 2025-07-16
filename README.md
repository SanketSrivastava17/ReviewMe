# ReviewMe
YelpCamp
This is a full-stack web application built as a project inspired by Colt Steele's "The Web Developer Bootcamp." It allows users to discover, create, and review campgrounds. Users can register for an account, add their own campgrounds with images, and leave comments on campgrounds created by other users.

This version has been customized to run entirely on a local machine, using local file storage for image uploads and removing external dependencies like Mapbox and Cloudinary.

Features
User Authentication: Users can register, log in, and log out. Passwords are fully hashed and salted.

Authorization: Users must be logged in to create or review campgrounds. They can only edit or delete the content they have personally created.

Full CRUD Functionality: Users can Create, Read, Update, and Delete campgrounds and reviews.

Local Image Uploads: All images are uploaded and stored directly on the server's local filesystem.

Flash Messages: Provides user feedback for actions like successful logins, errors, or successfully created posts.

Responsive Design: The user interface is built with Bootstrap to be functional on a variety of screen sizes.

Technology Stack
This project is built with the following core technologies:

Backend: Node.js, Express.js

Database: MongoDB with Mongoose for Object Data Modeling (ODM)

Frontend: EJS (Embedded JavaScript) for server-side templating, with Bootstrap 5 for styling.

Authentication: Passport.js with a local strategy for session management.

Image Handling: multer for processing multipart/form-data, with files saved to the local disk.

Local Setup & Installation
To run this project on your own machine, follow these steps.

Prerequisites
Node.js installed

MongoDB installed and running locally

1. Clone the Repository
First, clone the project files to your local machine.

Bash

git clone <your-repository-url>
cd <project-directory>
2. Install Dependencies
Install all the necessary Node.js packages as defined in package.json.

Bash

npm install
3. Set Up Environment Variables
Create a file named .env in the root of your project and add the following variables.

Ini, TOML

# The connection string for your local MongoDB instance
DB_URL=mongodb://localhost:27017/yelp-camp

# A secret key used to sign session cookies
SECRET=thisisnotagoodsecret
4. Create an Uploads Folder
You need a directory to store uploaded images. Inside the public folder, create a new folder named uploads.

/public/uploads
5. Run the Application
Start the Express server.

Bash

npm start
The application will be running at http://localhost:3000.

Project Structure
The project follows the Model-View-Controller (MVC) pattern.

├── app.js             # Main application entry point
├── controllers/       # Contains the logic for routes
├── models/            # Defines Mongoose schemas for the database
├── public/            # Static assets (stylesheets, client-side JS, uploads)
│   ├── javascripts/
│   ├── stylesheets/
│   └── uploads/
├── routes/            # Defines the application's routes
├── schemas.js         # Joi validation schemas
├── seeds/             # A script to populate the database with sample data
├── utils/             # Utility functions (error handling, etc.)
└── views/             # EJS templates for rendering p
