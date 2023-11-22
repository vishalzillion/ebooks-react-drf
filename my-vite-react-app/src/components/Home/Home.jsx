import React, { useState, useEffect } from 'react';
import SubNavbar from '../../SubNavBar';
import { useContext } from "react";
import { UserContext } from '../../Context';
import Axios from "axios"
import EditPopup from '../Edit/Edit';



function Home() {
  const { userData } = useContext(UserContext);
  const [requestStatus, setRequestStatus] = useState(null);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [unfilteredBooks, setUnfilteredBooks] = useState([]);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editedBook, setEditedBook] = useState(null);
  const [updateMessage ,setUpdateMessage] = useState(null)


  // const [editBook, setEditBook] = useState(false);
  // const [editedBook, setEditedBook] = useState(null); 

  const handleBook = (book) => {
    console.log('Selected Book:', book);
    setEditedBook(book);
    
     setShowEditPopup(true);// Show the Edit component
  };
  

  const handleEditBook = async (editedDetails) => {
    try {
      if (!editedDetails || !editedDetails.id) {
        console.error('Invalid book details:', editedDetails);
        return;
      }
      const token = localStorage.getItem('token');
      const userType = localStorage.getItem('user_type');
      const response = await Axios.put(`http://127.0.0.1:8000/listbook/${editedDetails.id}/`, {
        title: editedDetails.title,
        isbn: editedDetails.isbn,
        author: editedDetails.author,
        genre: editedDetails.genre,
        quantity: editedDetails.quantity,
        status: editedDetails.status,
      }, {
        headers: {
          Authorization: `${token}`,
          'X-User-Type': userType
        }
      });
      setUpdateMessage(response.data.message)
      setTimeout(()=>{
        setUpdateMessage(null)
      },3000);

      fetchBooks(currentPage);
    } catch (error) {
      // Handle errors
      console.error('Error updating book:', error);
      setUpdateMessage(error)
    }
    
  };


  const handleBookRequest = async (bookId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await Axios.post('http://127.0.0.1:8000/request-book/', {
        book_id: bookId,
      }, {
        headers: {
          Authorization: `${token}`

        }
      });
      console.log(response.data)
      console.log(response.data.message)
      // Assuming the response contains a message for successful request
      setRequestStatus(response.data.message);
      setTimeout(() => {
        setRequestStatus('');
      }, 3000);

    } catch (error) {
      // Handle errors
      console.error('Error making book request:', error);
      setRequestStatus('Failed to request the book.');
      setTimeout(() => {
        setRequestStatus('');
      }, 3000);
    }
  };






  const fetchBooks = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(`http://127.0.0.1:8000/allbooks/?page=${page}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      if (data.results && Array.isArray(data.results)) {
        setBooks(data.results);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('An error occurred while fetching data.');
      setLoading(false);
    }
  };
  const [filteredBooks, setFilteredBooks] = useState([]);

  // Function to filter books based on category
  useEffect(() => {
    setUnfilteredBooks(books);
    setFilteredBooks(books); // Set filteredBooks to all books when books change
  }, [books]);

  const filterBooksByCategory = (category) => {
    if (category === 'All') {
      setFilteredBooks(unfilteredBooks); // Set filteredBooks to all books when 'All' is clicked
    } else {
      const filtered = unfilteredBooks.filter((book) => book.genre === category);
      setFilteredBooks(filtered);
    }
  };


  useEffect(() => {
    fetchBooks(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <SubNavbar filterBooks={filterBooksByCategory} />
      {requestStatus && <h4>{requestStatus}</h4>}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 mt-8 ">
        {loading ? (
          <p className="text-center text-gray-700">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : filteredBooks.length === 0 ? (
          <p className="text-center text-gray-700">No books found.</p>
        ) : (
          filteredBooks.map((book, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:shadow-lg hover:scale-105 duration-300 ease-in-out"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{book.title}</h2>
              <p className="text-gray-600 mb-2">Author: {book.author}</p>
              <p className="text-gray-600 mb-2">Genre: {book.genre}</p>
              <p className="text-gray-600 mb-4">Quantity: {book.quantity}</p>
              <p className="text-gray-600 mb-4">status: {book.status}</p>
           
             
              {userData.user_type === 'librarian' ? (

                <button
                  onClick={() => handleBook(book)}


                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg shadow-md focus:outline-none"
                >
                  Edit
                </button>

              ) : (
              <button onClick={() => handleBookRequest(book.id)} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md focus:outline-none">
                Request Book
              </button>
              )}
            </div>
          ))
        )}
         {showEditPopup && editedBook && (
          <EditPopup
            book={editedBook}
            onClose={() => setShowEditPopup(false)}
            onUpdate={handleEditBook}
            updateMessage={updateMessage}
          />
        )}
        
      
      </div>
      <div className="flex justify-center my-4 mb-80">
        <button
          onClick={handlePreviousPage}
          className="text-blue-700 bg-blue-100 p-2 rounded-lg mr-2 focus:outline-none"
        >
          Previous Page
        </button>
        <button
          onClick={handleNextPage}
          className="text-blue-700 bg-blue-100 p-2 rounded-lg focus:outline-none"
        >
          Next Page
        </button>
      </div>
    </>
  );
}
export default Home;
