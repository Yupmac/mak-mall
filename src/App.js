import { Navbar, Container, Nav, Row } from "react-bootstrap";
import "./App.css";
import data from "./data";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Detail from "./Pages/Detail";
import About from "./Pages/About";
import Card from "./Components/Card";
import Event from "./Pages/Event";
import axios from "axios";
import Cart from "./Pages/Cart";

function App() {
  let [mak, setMak] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">막컬리</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/cart">장바구니</Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/event");
              }}
            >
              이벤트
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <Container>
                <Row>
                  {mak.map((a, i) => {
                    return <Card mak={mak[i]} i={i + 1} key={mak.id}></Card>;
                  })}
                </Row>
                {/* <button
                  onClick={() => {
                    axios
                      .get("https://codingapple1.github.io/shop/data2.json")
                      .then((res) => {
                        console.log(res.data);
                        let copy = [...mak, ...res.data];
                        setMak(copy);
                      })
                      .catch(() => {
                        console.log("실패함");
                      });
                  }}
                >
                  버튼
                </button> */}
              </Container>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail mak={mak} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치임</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>
        <Route path="*" element={<h4>잘못된 페이지입니다.</h4>} />
      </Routes>
    </div>
  );
}

export default App;
