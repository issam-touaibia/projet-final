import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: "18rem", marginBottom: "5%" }}>
      <Card.Img variant="top" src={product.imageUrl} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <h5> {product.price} </h5>
        <h5> {product.category}</h5>
        <h5> {product.quantity} </h5>
       <img src={product.imageUrl} width="50px" alt="" /> 
     
       
        <Button variant="primary">Ajouter au panier</Button>
        <input type="text" />
          <button className="">edit</button> 
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
