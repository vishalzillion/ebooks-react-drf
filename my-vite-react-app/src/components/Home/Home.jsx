import React, { useState, useEffect } from 'react';
import SubNavbar from '../../SubNavBar';
import { useContext } from "react";
import { UserContext } from '../../Context';
import Axios from "axios"
import EditPopup from '../Edit/Edit';
import { FaSpinner } from 'react-icons/fa'; // Importing a spinner icon from react-icons





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
  const [updateMessage, setUpdateMessage] = useState(null)


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
      setTimeout(() => {
        setUpdateMessage(null)
      }, 3000);

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
    const timer = setTimeout(() => {
      fetchBooks(currentPage);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount or when currentPage changes
  }, [currentPage, fetchBooks]);


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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4 mt-8">
        {loading ? (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-blue-200 opacity-75 z-50">
            <div className="text-center">
              {/* Loading spinner with Tailwind CSS styling */}
              <FaSpinner className="animate-spin h-8 w-8 mx-auto text-gray-500" />
              <p className="text-gray-500 mt-2">Loading...</p>
            </div>
          </div>
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
              <div className="mb-4">
                {/* Display the book image */}
                <img
                  src={book.cover_image} // Assuming the image property holds the URL of the image
                  alt={`Cover of ${book.title}`} // Add alt text for accessibility
                  className="w-full h-auto rounded-md shadow-md"
                />
              </div>
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
      {!loading && (
        <div className="flex justify-center my-4">
          {currentPage > 1 && (
            <button
              onClick={handlePreviousPage}
              className="text-blue-700 bg-blue-100 p-2 rounded-lg mr-2 focus:outline-none"
            >
              Previous Page
            </button>
          )}
          <button
            onClick={handleNextPage}
            className="text-blue-700 bg-blue-100 p-2 rounded-lg focus:outline-none"
          >
            Next Page
          </button>
        </div>
      )}
    </>
  );
}
export default Home;
