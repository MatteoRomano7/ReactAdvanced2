import React, { useState } from "react"
import { Card, Button, Modal } from "react-bootstrap"

const SingleBook = ({ book, isSelected, onSelect }) => {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <Card
        onClick={() => onSelect(book.asin)}
        style={{
          border: isSelected ? "3px solid red" : "none",
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
          <Card.Text>Prezzo: {book.price}€</Card.Text>
          <Button variant="primary" onClick={handleShowModal}>
            Buy Right Now! &copy;
          </Button>
          <Button variant="secondary">Add to the cart</Button>
        </Card.Body>
      </Card>
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
    </>
  )
}

export default SingleBook
