import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useState ,useEffect } from 'react'

function Layout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username,setUsername] = useState(null)


  useEffect(() => {
    // Check if the user is logged in based on token or other conditions
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    setIsLoggedIn(!!token);
    setUsername(username); // Set isLoggedIn based on token presence
  }, []);

  return (
    <>
    <Header isLoggedIn={isLoggedIn} username = {username} />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout