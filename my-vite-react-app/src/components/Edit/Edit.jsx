import React, { useState,useEffect} from 'react';

const EditPopup = ({ book, onClose, onUpdate ,updateMessage}) => {
  const [editedDetails, setEditedDetails] = useState(book);

  console.log(editedDetails);
  useEffect(() => {
   
    setEditedDetails(book);
  }, [book]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  

  const handleUpdate = () => {
    onUpdate(editedDetails);
    setTimeout(()=>{
      onClose()
    },3000)
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md shadow-md w-1/4">
        <h2 className="text-2xl font-bold mb-4">Edit Book Details</h2>
        {updateMessage && <h4>{updateMessage}</h4> }
        <div className="flex flex-col mb-4">
          <label htmlFor="title" className="mb-2 text-sm font-semibold">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={editedDetails.title}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="title" className="mb-2 text-sm font-semibold">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={editedDetails.author}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="title" className="mb-2 text-sm font-semibold">
            IsBN
          </label>
          <input
            type="text"
            id="isbn"
            name="isbn"
            value={editedDetails.isbn}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="title" className="mb-2 text-sm font-semibold">
            Genre
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={editedDetails.genre}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="title" className="mb-2 text-sm font-semibold">
            Quantity
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={editedDetails.quantity}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="title" className="mb-2 text-sm font-semibold">
            Status
          </label>
          <input
            type="text"
            id="status"
            name="status"
            value={editedDetails.status}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        
        <button
          onClick={handleUpdate}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Update
        </button>
        <button
          onClick={onClose}
          className="ml-2 text-gray-600 px-4 py-2 rounded-md hover:text-gray-800 focus:outline-none"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditPopup;
