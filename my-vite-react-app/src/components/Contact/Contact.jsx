import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen flex justify-center my-5">
      <div className="bg-white p-8 rounded-lg shadow-md w-1/2">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Get in Touch</h1>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-800 font-semibold mb-1">Name</label>
            <input type="text" id="name" name="name" className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-800 font-semibold mb-1">Email</label>
            <input type="email" id="email" name="email" className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-800 font-semibold mb-1">Message</label>
            <textarea id="message" name="message" rows="5" className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md">Submit</button>
        </form>
        <div className="mt-8 text-center text-gray-800">
          <p className="mb-2">Or reach out to us at:</p>
          <p>123 Jane Street,</p>
          <p>Birmingham, United Kingdom, 12345</p>
          <p>Email: contact@ebooks.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.78 7.22a1 1 0 00-1.4-.16A15.8 15.8 0 0112 9c-4.41 0-8 1.78-8 4s3.59 4 8 4a15.8 15.8 0 019.38 3.94 1 1 0 001.24.16A1 1 0 0022 19V9a1 1 0 00-1.22-.98zM12 15a12.8 12.8 0 00-7.38-3.94 13.68 13.68 0 00-.62-.14A13.78 13.78 0 003 17v1.75a17.76 17.76 0 016-1c.38 0 .73.03 1.1.06a1 1 0 00.9-.5A10.23 10.23 0 0112 15a10.23 10.23 0 014 1.31 1 1 0 00.9.5c.37-.03.72-.06 1.1-.06a17.76 17.76 0 016 1V17a13.78 13.78 0 00-1.98-5.08 13.68 13.68 0 00-.62.14A12.8 12.8 0 0012 15z"/>
            </svg>
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12a10 10 0 0017.52 6.4l3.43 3.42A1 1 0 0024 20.57v-4.95A10 10 0 0012 2zM7.37 18.23l-4.58 1.6a8 8 0 0113.2-9.78l-4.58 4.58a4 4 0 01-5.24 5.83z"/>
            </svg>
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12a10 10 0 0017.52 6.4l3.43 3.42A1 1 0 0024 20.57v-4.95A10 10 0 0012 2zM7.37 18.23l-4.58 1.6a8 8 0 0113.2-9.78l-4.58 4.58a4 4 0 01-5.24 5.83z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
