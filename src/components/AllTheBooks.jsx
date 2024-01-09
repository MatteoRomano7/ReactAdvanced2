import React, { useState } from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import booksData from "../data/books.json"

const AllTheBooks = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedGenre, setSelectedGenre] = useState("all")

  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value)
  }

  const genres = ["all", ...Object.keys(booksData)]

  return (
    <div>
      <div className="d-flex justify-content-center">
        <Form.Control as="select" onChange={handleGenreChange} className="w-25">
          <option value="" disabled defaultValue>
            Select your genre
          </option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </Form.Control>
      </div>

      <Row xs={1} sm={2} md={3} lg={4}>
        {Object.keys(booksData).map(
          (category) =>
            (selectedGenre === "all" || selectedGenre === category) &&
            booksData[category].map((book, index) => (
              <Col key={index}>
                <Card style={{ width: "80%", margin: "2rem" }}>
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>Prezzo: {book.price}€</Card.Text>
                    <Button variant="primary" onClick={handleShowModal}>
                      Buy Right Now! &copy;
                    </Button>
                    <Button variant="secondary">Add to the cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
        )}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Instant Book Delivery Sistem ©</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The book was just delivered, check outside your door!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AllTheBooks
