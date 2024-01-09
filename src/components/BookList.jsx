import React, { useState } from "react"
import { Col, Row, Form } from "react-bootstrap"
import Selettori from "./Selettori"
import SingleBook from "./SingleBook"
import CommentArea from "./CommentArea"
import booksData from "../data/books.json"

const BookList = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("all")
  const [selectedBookAsin, setSelectedBookAsin] = useState(null)

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase())
  }

  const handleBookSelect = (asin) => {
    setSelectedBookAsin(asin)
  }

  const genres = ["all", ...Object.keys(booksData)]

  let filteredBooks =
    booksData[selectedGenre] || Object.values(booksData).flat()

  if (selectedGenre === "all") {
    filteredBooks = Object.values(booksData).flat()
  }

  filteredBooks = filteredBooks.filter(
    (book) =>
      book.title &&
      typeof book.title === "string" &&
      book.title.toLowerCase().includes(searchQuery)
  )

  return (
    <div>
      <Selettori
        selectedGenre={selectedGenre}
        searchQuery={searchQuery}
        handleGenreChange={handleGenreChange}
        handleSearchChange={handleSearchChange}
      />
      <Row>
        <Col xs={8}>
          <Row>
            {filteredBooks.map((book, index) => (
              <Col xs={12} md={4} key={`${book.asin}-${index}`}>
                <SingleBook
                  book={book}
                  isSelected={book.asin === selectedBookAsin}
                  onSelect={handleBookSelect}
                />
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={4}>
          {selectedBookAsin ? (
            <CommentArea bookAsin={selectedBookAsin} />
          ) : (
            <p>Seleziona un libro per vedere i commenti</p>
          )}
        </Col>
      </Row>
    </div>
  )
}

export default BookList
