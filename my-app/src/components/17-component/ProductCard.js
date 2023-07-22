import React from "react";
import { Card } from "react-bootstrap";

const ProductCard = (props) => {
  console.log(props);
  return (
    <Card>
      <Card.Img
        variant="top"
        src={props.product.avatar}
        height={"200px"}
      />
      <Card.Body className="text-center d-flex flex-column justify-content-center">
        
        <Card.Subtitle>{props.product.id}</Card.Subtitle>
        <Card.Title>{props.product.productName}</Card.Title>
        <Card.Text>{props.product.price}</Card.Text>
        <Card.Subtitle>{props.product.createdAt}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
