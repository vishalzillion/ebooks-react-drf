import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 fixed bottom-0 w-full">
    <div className="container mx-auto flex flex-col lg:flex-row justify-between px-4">
        {/* Left Section */}
        <div className="mb-8 lg:mb-0">
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
            </li>
            {/* Add more links */}
          </ul>
        </div>

        {/* Middle Section */}
        <div className="mb-8 lg:mb-0">
          <h3 className="text-2xl font-bold mb-4">Address</h3>
          <p>123 Jane Street</p>
          <p>Birmingham, United Kingdom</p>
          <p>Email: info@ebooks.com</p>
          <p>Phone: +123456789</p>
        </div>

        <div className="flex flex-col items-center lg:flex-row lg:items-center w-full lg:w-auto space-y-4 lg:space-y-0 lg:space-x-4">
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <Link to="#" className="social-icon" title="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link to="#" className="social-icon" title="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link to="#" className="social-icon" title="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>

          {/* Subscription Form */}
          <form className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:ml-auto">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-700 px-4 py-2 rounded-md text-white focus:outline-none"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


