import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import scifi from "../assets/books/scifi.json";

class LatestRelease extends Component {
  render() {
    return(
      <Container fluid>
        <Row>
          {
            scifi.map((book) => (
              <Col md={2}>
                <img src={book.img} alt="" key={book.id} height="300"/>
              </Col>
            ))
          }
        </Row>
      </Container>
    )
  }
}

export default LatestRelease;