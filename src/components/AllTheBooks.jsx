import React, { useState } from "react";
import booksData from "../data/books.json";

const AllTheBooks = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("all");

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleGenreChange = (event) => setSelectedGenre(event.target.value);

  const genres = ["all", ...Object.keys(booksData)];

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center mb-8">
        <select
          onChange={handleGenreChange}
          className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled defaultValue>
            Select your genre
          </option>
          {genres.map((genre, index) => (
            <option key={index} value={genre} className="capitalize">
              {genre}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Object.keys(booksData).map(
          (category) =>
            (selectedGenre === "all" || selectedGenre === category) &&
            booksData[category].map((book, index) => (
              <div key={index} className="bg-white rounded-lg border-2 border-gray-300 shadow-lg overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:border-gray-400">
                <div className="h-64 overflow-hidden">
                  <img src={book.img} alt={book.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-2 flex-grow">{book.title}</h3>
                  <p className="text-gray-600 mb-4">Price: €{book.price}</p>
                  <div className="flex flex-col space-y-2">
                    <button
                      onClick={handleShowModal}
                      className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                    >
                      Buy Now
                    </button>
                    <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Instant Book Delivery System</h2>
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
    </div>
  );
};

export default AllTheBooks;