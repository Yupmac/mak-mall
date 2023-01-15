import { Col } from "react-bootstrap";

const Card = (props) => {
  return (
    <Col>
      <img src={"/막걸리" + props.i + ".png"} alt="막걸리1.png" width="100%" />
      <h4>{props.mak.title}</h4>
      <p>{props.mak.price}</p>
    </Col>
  );
};

export default Card;
