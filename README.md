eBooks React App
This project is a book library web app built with React.

Key Components
App

Main App component
Sets up React Router with all app routes and layout
Client-side routing between pages
Layout

Shared header and footer
Checks auth state to display relevant nav links
Outlet renders child route components
Header

Top navbar with branding, links, authentication
Navigation adapts to auth state
Profile popup shows user details when logged in
Footer

Site footer with links and subscription form
Home

Displays book grid with search/filter
Fetch books from API with loading state
Book request and edit actions based on user type
Auth Components

Login, Logout
Signup and forgot password views
Handle API calls and updating auth state
UserContext

Global user state management with Context API
Persists user data in localStorage
Common Components

Popups, Loaders, Messages
Can be reused across views
Getting Started
Clone the repo and install dependencies:

bash


npm install
Run dev server:

bash


npm run dev
Build app for production:

npm run build



i have used backend api from library-management system which is also pushed so add that also how to install and run the server to access api

VK
You're right, good call out! Here is an updated section I would add to integrate the necessary backend API setup:

Backend Setup
This project uses a Django/DRF backend API for database and authentication operations.

The API code is available here: https://github.com/myaccount/library-management

Follow the setup instructions to get the API server running:

Copy code

cd library-management
python -m venv env
source env/bin/activate
pip install -r requirements.txt

# Run Migrations
python manage.py migrate

# Create admin user
python manage.py createsuperuser

# Start backend server
python manage.py runserver
The React frontend app expects the API server to be running on http://localhost:8000.

The API endpoints power user authentication, book CRUD functionality, requests etc.

