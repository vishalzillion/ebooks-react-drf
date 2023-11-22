import React, { useState,useRef} from 'react';
import Axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../Context';
import ReCAPTCHA from 'react-google-recaptcha';
function Login() {
  const { updateUserData } = useContext(UserContext);
  const navigate = useNavigate();
  const recaptchaRef = useRef();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleRecaptchaChange = (value) => {
    // This function will be called when the user completes the reCAPTCHA
    console.log('Recaptcha value:', value);
    // You can store the value in state or use it as needed
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const recaptchaValue = recaptchaRef.current.getValue();

    try {
      const response = await Axios.post('http://127.0.0.1:8000/login/', {
        ...formData,
        recaptcha_token: recaptchaValue, 
      });

      if (response.data.token) {
        const token = response.data.token;
        console.log(response.data)
        localStorage.setItem('token', `Token ${token}`);
        localStorage.setItem("username",response.data.user.username)
        localStorage.setItem('user_type', response.data.user_type);


        updateUserData({
          token: `Token ${token}`,
          username: response.data.user.username,
          user_type: response.data.user_type,
        });


        navigate('/');
        
       
        
      }
    } catch (error) {
      
      recaptchaRef.current.reset();
      if (error.response && error.response.data) {
        const responseErrors = error.response.data;

        let errorMessage = '';
        for (const key in responseErrors) {
          if (responseErrors.hasOwnProperty(key)) {
            errorMessage += `${responseErrors[key].join(', ')}\n`;
          }
        }

        setError(errorMessage);
      } 
    }
  };

  return (
    <div className="flex items-center justify-center my-10">
      <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
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
          <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <ReCAPTCHA
        
          ref={recaptchaRef}
          sitekey="6Ld9NBgpAAAAAJKIhYjomZvaF-YNU8kCTnRKIxYl"
          onChange={handleRecaptchaChange}
          // size="invisible"
          className="bg-orange-300 w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full mt-3 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
