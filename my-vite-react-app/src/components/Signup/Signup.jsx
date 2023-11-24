import React, { useState ,useRef } from 'react';
import Axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';


function Signup() {
  const recaptchaRef = useRef();
  // const formRef = useRef(null);
 
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    user_type: 'librarian', // Set a default value
    phone_number: '',
  });
  console.log(formData)

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const resetForm = () => {
    setFormData({
      username: '',
      password: '',
      email: '',
      user_type: 'librarian',
      phone_number: '',
    });
  };


  const handleSignup = async (e) => {
    e.preventDefault();
  
    if (!formData.username || !formData.email) {
      setError('Username and Email are required.');
      return;
    }
  
    try {
      const response = await Axios.post('http://127.0.0.1:8000/signup/', formData);
  
      
      const token = response.data.token;
      localStorage.setItem('token', token);

      setSuccessMessage('Signup successful! You are now logged in.');
      setError(null);
      resetForm();

      setTimeout(() => setSuccessMessage(null), 3000);
      
    } catch (error) {
      if (error.response && error.response.data) {
        const responseErrors = error.response.data;
        
        let errorMessage = '';
        for (const key in responseErrors) {
          if (responseErrors.hasOwnProperty(key)) {
            errorMessage += `${responseErrors[key].join(', ')}\n`;
          }
        }
  
        setError(errorMessage);
      } else {
        console.error('Signup failed:', error);
        setError('Failed to sign up. Please check your credentials.');
      }
      setSuccessMessage(null);
    }
  };
  

  return (
    

<div className="max-w-md mr-auto mx-auto my-auto p-4  bg-white rounded-lg shadow-lg mb-96 mt-5">

  <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
  { successMessage && <div className="text-green-500 text-center mb-4">{successMessage}</div>}
{ error && <div className="text-red-500 text-center mb-4">{error}</div> }

<form onSubmit={handleSignup}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">User Type:</label>
      <select
        name="user_type"
        value={formData.user_type}
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="librarian">Librarian</option>
        <option value="student">Student</option>
      </select>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
      <input
        type="text"
        name="phone_number"
        value={formData.phone_number}
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
    {/* <ReCAPTCHA
        
        ref={recaptchaRef}
        sitekey="6Ld9NBgpAAAAAJKIhYjomZvaF-YNU8kCTnRKIxYl"
        // onChange={handleRecaptchaChange}
        // size="invisible"
        className="bg-gray-300 w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      /> */}
    <button
      type="submit"
      className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-5"
    >
      Sign Up
    </button>
  </form>
</div>
  );
}

export default Signup;
