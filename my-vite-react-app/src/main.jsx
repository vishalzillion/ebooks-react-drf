import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import your App component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);





// import React from 'react'
import './index.css'
// import ReactDOM from 'react-dom/client'
// import Home from './components/Home/Home';
// import Layout from './Layout';
// import Signup from './components/Signup/Signup';
// import { createBrowserRouter , RouterProvider } from 'react-router-dom';
// import About from './components/About/About';
// import Cart from './components/Cart/Cart';
// import Contact from './components/Contact/Contact';
// import Login from './components/Login/Login';
// import Logout from './components/Logout/Logout';
// import { useState } from 'react';




// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout />,
//     children:[
//       {
//       path:"",
//       element:<Home />
//       },
//       {
//         path:"signup",
//         element:<Signup />
//       },
//       {
//         path:"about",
//         element:<About />
//       },
//       {
//         path:"cart",
//         element:<Cart />
//       },
//       {
//         path:"contact",
//         element:<Contact />
//       },
//       {
//         path:"login",
//         element:<Login />
//       },
//       {
//         path:"logout",
//         element:<Logout />
//       },
    
    
//   ]
  
//   }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>

  

    
//     <RouterProvider router={router} />
    
  
//   </React.StrictMode>,
// )

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import ReactDOM from 'react-dom';
// import Home from './components/Home/Home';
// import Layout from './Layout';
// import Signup from './components/Signup/Signup';
// import About from './components/About/About';
// import Cart from './components/Cart/Cart';
// import Contact from './components/Contact/Contact';
// import Login from './components/Login/Login';
// import Logout from './components/Logout/Logout';

// const isLoggedIn = true; // Set your condition here

// const App = () => {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login />} />
//           <Route path="/logout" element={isLoggedIn ? <Logout /> : <Navigate to="/login" />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// };

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
