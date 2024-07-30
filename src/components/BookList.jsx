import React, { useState } from "react";
import Selettori from "./Selettori";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import booksData from "../data/books.json";

const BookList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedBookAsin, setSelectedBookAsin] = useState(null);

  const handleGenreChange = (event) => setSelectedGenre(event.target.value);
  const handleSearchChange = (event) => setSearchQuery(event.target.value.toLowerCase());
  const handleBookSelect = (asin) => setSelectedBookAsin(asin);

  const genres = ["all", ...Object.keys(booksData)];

  let filteredBooks = selectedGenre === "all" 
    ? Object.values(booksData).flat() 
    : booksData[selectedGenre] || [];

  filteredBooks = filteredBooks.filter(
    (book) => book.title && typeof book.title === "string" && book.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="container mx-auto px-4">
      <Selettori
        selectedGenre={selectedGenre}
        searchQuery={searchQuery}
        handleGenreChange={handleGenreChange}
        handleSearchChange={handleSearchChange}
      />
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-3/4 pr-0 lg:pr-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 border-10 border-blue-950">
            {filteredBooks.map((book, index) => (
              <SingleBook
                key={`${book.asin}-${index}`}
                book={book}
                isSelected={book.asin === selectedBookAsin}
                onSelect={handleBookSelect}
              />
            ))}
          </div>
        </div>
        <div className="lg:w-1/4 mt-6 lg:mt-0">
          <div className="sticky top-6">
            {selectedBookAsin ? (
              <CommentArea bookAsin={selectedBookAsin} />
            ) : (
              <p className="text-gray-600 italic bg-white p-4 rounded-lg shadow">Select a book to view comments</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;