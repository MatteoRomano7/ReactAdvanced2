import './Welcome.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Welcome = () => {
  return (
    <Container className="mb-4 bg-warning">
      <Row>
        <Col className="transition-from-left">
          <h3>Welcome to BookShelf!</h3>
          <h5>
            If you're too lazy to get up off the couch, dress up and go to a
            real library, that's the place for you!{" "}
          </h5>
        </Col>
        <Col className="transition-from-right">
          <img
            src="../assets/images/bookshelf.jpg"
            alt="bookshelf"
            style={{ width: "80%" }}
          ></img>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
