import React, { useState, useEffect } from "react";
import booksData from "../data/books.json";

const Selettori = ({ handleGenreChange, handleSearchChange }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");

  useEffect(() => {
    handleGenreChange({ target: { value: selectedGenre } });
  }, [selectedGenre, handleGenreChange]);

  const genres = ["all", ...Object.keys(booksData)];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <label htmlFor="genre" className="block text-sm font-medium text-gray-700 mb-2">
          Select a genre
        </label>
        <select
          id="genre"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="" disabled>
            Select your genre
          </option>
          {genres.map((genre, index) => (
            <option key={index} value={genre} className="capitalize">
              {genre}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
          Search for a book
        </label>
        <input
          type="text"
          id="search"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          placeholder="Enter a title or part of it"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value.toLowerCase());
            handleSearchChange(e);
          }}
        />
      </div>
    </div>
  );
};

export default Selettori;