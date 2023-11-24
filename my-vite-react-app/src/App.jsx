import React from 'react';
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout'; // Your layout component
import Signup from './components/Signup/Signup';
import Logout from './components/Logout/Logout';
import Cart from './components/Cart/Cart'
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import About from './components/About/About';
import { UserProvider } from './Context';
import Settings from './components/Settings/Settings';
import Feedback from './components/Feedback/Feedback';
import AskQuestion from './components/Cart/AskQuestions/AskQuestions';
import TutorialVideo from './components/HelpCenter/HelpCenter';
import Chatting from './components/Chatting/Chatting';

function App() {
  return (
    <Router>
    <UserProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="settings" element={<Settings />} />
          <Route path="feedback" element={<Feedback/>} />
          <Route path="askquestions" element={<AskQuestion />} />
          <Route path="helpcenter" element={<TutorialVideo />} />
          <Route path="chatting" element={<Chatting />} />

          
          
        </Route>
      </Routes>
    </UserProvider>
    </Router>
  );
}

export default App;
