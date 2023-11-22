
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Cart = () => {

    const [requestedBooks, setRequestedBooks] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userRole = localStorage.getItem('user_type');

        // Ensure the user has both a token and a role
        if (token && userRole === 'librarian') {
            fetchRequestedBooks(token);
        }
    }, []);

    const fetchRequestedBooks = async (token) => {
        try {
            const response = await Axios.get('http://127.0.0.1:8000/bookrequests/', {
                headers: {
                    Authorization: `${token}`
                }
            });
          
            console.log(response.data)
            setRequestedBooks(response.data);
        } catch (error) {
            console.error('Error fetching requested books:', error);
            // Handle error
        }
    };
    // Assuming your response is stored in a variable named 'response'
   




    return (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Book Request</h2>
          {requestedBooks.map((book,index) => (
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4" key={book.id}>
              <div className="flex items-center">
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{index + 1}</h3>
                  <p className="text-gray-600">{book.book_title}</p>
                  <p className="text-gray-600">{book.user_username}</p>
                </div>
              </div>
        
              <div>
                <button className="text-sm text-red-500 focus:outline-none mx-10">
                  Reject
                </button>
                <button className="text-sm text-red-500 focus:outline-none">
                  Accept
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none">
              Checkout
            </button>
          </div>
        </div>
      );
      
};

export default Cart;
