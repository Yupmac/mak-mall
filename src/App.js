import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import "./App.css";
import data from "./data";
import { useState } from "react";

function App() {
  let [mak] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">막컬리</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#pricing">장바구니</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <Container>
        <Row>
          {mak.map((a, i) => {
            return <Card mak={mak[i]} i={i + 1} key={mak.id}></Card>;
          })}
        </Row>
      </Container>
    </div>
  );
}

const Card = (props) => {
  return (
    <Col>
      <img src={"/막걸리" + props.i + ".png"} alt="막걸리1.png" width="100%" />
      <h4>{props.mak.title}</h4>
      <p>{props.mak.price}</p>
    </Col>
  );
};
export default App;
