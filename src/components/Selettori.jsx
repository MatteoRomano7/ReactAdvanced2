import React, { useState, useEffect } from "react"
import { Col, Row, Form, InputGroup } from "react-bootstrap"
import booksData from "../data/books.json"

const Selettori = ({ handleGenreChange, handleSearchChange }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("all")

  useEffect(() => {
    handleGenreChange({ target: { value: selectedGenre } })
  }, [selectedGenre])

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
      <InputGroup className="d-flex justify-content-center">
        <InputGroup.Text>Seleziona un genere</InputGroup.Text>
        <Form.Control
          id="genere"
          as="select"
          aria-label="Cerca un libro"
          placeholder="Seleziona un genere"
          onChange={(e) => setSelectedGenre(e.target.value)}
          value={selectedGenre}
        >
          <option value="" disabled>
            Select your genre
          </option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </Form.Control>
      </InputGroup>
      <Row className="m-4">
        <Col>
          <InputGroup>
            <InputGroup.Text>Cerca un libro</InputGroup.Text>
            <Form.Control
              size="sm"
              as="textarea"
              aria-label="Cerca un libro"
              placeholder="Scrivi un titolo o parte di esso"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value.toLowerCase())
                handleSearchChange(e)
              }}
            />
          </InputGroup>
        </Col>
      </Row>
    </div>
  )
}

export default Selettori
