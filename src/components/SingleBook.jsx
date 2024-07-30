import React, { useState } from "react";

const SingleBook = ({ book, isSelected, onSelect }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div 
        onClick={() => onSelect(book.asin)}
        className={`bg-white rounded-lg overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-xl
                    ${isSelected 
                      ? 'border-4 border-red-500 shadow-lg' 
                      : 'border-2 border-gray-300 shadow-md'
                    }`}
      >
        <div className="h-64 overflow-hidden">
          <img src={book.img} alt={book.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold mb-2 flex-grow text-black">{book.title}</h3>
          <p className="text-gray-600 mb-4">Price: €{book.price}</p>
          <div className="flex flex-col space-y-2">
            <button
              onClick={handleShowModal}
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Buy Right Now! ©
            </button>
            <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Instant Book Delivery System ©</h2>
            <p className="mb-6">The book was just delivered, check outside your door!</p>
            <button
              onClick={handleCloseModal}
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleBook;