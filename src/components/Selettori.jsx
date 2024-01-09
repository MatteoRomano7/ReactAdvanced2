import React from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import booksData from "../data/books.json";

class Selettori extends React.Component {
    state = { 
        searchQuery: '',
        selectedGenre: "all"
    };

    handleGenreChange = (event) => {
        this.setState({ selectedGenre: event.target.value });
    };

    handleSearchChange = (event) => {
        this.setState({ searchQuery: event.target.value.toLowerCase() });
    };

    render() {
        const { selectedGenre, searchQuery } = this.state;
        const genres = ["all", ...Object.keys(booksData)];

        let filteredBooks = booksData[selectedGenre] || Object.values(booksData).flat();

        if (selectedGenre === "all") {
            filteredBooks = Object.values(booksData).flat();
        }

        filteredBooks = filteredBooks.filter(book =>
            book.title &&
            typeof book.title === 'string' &&
            book.title.toLowerCase().includes(searchQuery)
        );

        return (
            <div>
                <div className="d-flex justify-content-center">
                    <Form.Control
                        as="select"
                        onChange={this.handleGenreChange}
                        className="w-50"
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
                </div>
                <Row className='mb-4'>
                    <Col>
                        <Form.Group>
                            <Form.Label>Cerca un libro</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Scrivi un titolo o parte di esso"
                                value={searchQuery}
                                onChange={this.handleSearchChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Selettori;