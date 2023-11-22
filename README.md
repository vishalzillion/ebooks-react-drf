Ebooks - Library Management App
Full stack library management web application with React frontend and Django/Django REST Framework backend

Table of Contents
About
Tech Stack
Application Structure
Frontend Setup
Key Components
Starting Development Server
Backend API Setup
Database Configuration
API Endpoints
Authentication
Starting API Server
Deployment
About
Ebooks allows users to:

Browse available library books
Reserve and request books
Manage their account
Librarians can manage inventory, book entries etc
Built using React, Tailwind CSS for the frontend and Django REST Framework for the backend API.

Tech Stack
Frontend:

React
React Router
Tailwind CSS
Axios
Backend:

Django
Django REST Framework
Postgres Database
Application Structure
Copy code

├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
│   ├── tailwind.config.js
│   └── ...
└── backend
    ├── apps
    │   ├── books
    │   ├── accounts
    │   └── api
    ├── config
    ├── manage.py
    ├── requirements.txt
    └── ...
Frontend Setup
The React frontend application is located in the frontend directory.

Key Components
App - Routes and site layout
Home - Display book listings
Header - Top navigation
Footer - Site footer links
Auth Flow - Login/signup pages
Starting Development Server
Copy code

# Install dependencies  
npm install

# Start react dev server
npm start
The app will run on port 3000 by default - http://localhost:3000

Additional scripts like build, test, and lint are in package.json

Backend API Setup
The Django and Django REST Framework backend is located in backend directory.

It uses a Postgres database for storing book listings and user accounts data.

Database Configuration
Default local development database configuration:

Copy code

# Local Postgres Database
DB_HOST=localhost
DB_NAME=ebooks
DB_USER=postgres
DB_PASS=password
API Endpoints
Base URL for the API is http://localhost:8000/api

Main endpoints:

/books - Fetch all books
/books/:id - Get single book
/books/new - Create new book
/users - Create and manage user accounts
/login - Login endpoint for token
/logout - Invalidate authentication token
Authentication
Uses JSON Web Token based authentication powered by simple-jwt.

Login endpoint returns JWT token to be included in Authorization header for authenticated requests.

Starting API Server
Copy code

# Virtualenv 
python -m venv env
source env/bin/activate

# Install packages
pip install -r requirements.txt  

# Run database migrations
python manage.py migrate

# Create admin user
python manage.py createsuperuser 

# Run development server
python manage.py runserver
Deployment
The frontend bundle can be built and served using any static site host like Netlify, Vercel etc.

The Django backend API can be deployed to a server or PaaS like Heroku, AWS Elastic Beanstalk etc.
