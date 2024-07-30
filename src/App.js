import React from "react";
import "./App.css";
import "./components/Welcome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList.jsx";
/* import booksData from "./data/books.json"; */
/* import AllTheBooks from './components/AllTheBooks' */ /* (19/12/2023) */
import { Container } from 'react-bootstrap';


function App() {
  return (

    <>
      <Container fluid className="position-sticky sticky-top">
        <span id="inizio"></span>
        <span>
          <CustomNavbar />
        </span>
      </Container>
      <Container fluid>
        <Welcome />
      </Container>
      <Container>
        {/* <AllTheBooks /> */}
        <BookList />
      </Container>
      <Container fluid>
        <MyFooter />
      </Container>
    </>
  );
}

export default App;
