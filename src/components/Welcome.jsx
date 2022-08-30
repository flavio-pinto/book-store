import { Component } from "react";
import { Button, Jumbotron } from "react-bootstrap";

class Welcome extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Benvenuto nel Book Shop!</h1>
        <p>
          Questo è il peggior negozio online di libri in Italia!
        </p>
        <p>
          <Button variant="primary">Scopri di più</Button>
        </p>
      </Jumbotron>
    );
  }
}

export default Welcome;