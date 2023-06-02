import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { saveAs } from "file-saver";
import { Button } from "react-bootstrap";

const Product = ({ product }) => {
  const downloadImage = () => {
    saveAs("/images/alexa.jpg", "image.jpg"); // Put your image url here.
  };
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        {/* Product image */}
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          {/* Product name */}
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          {/* Product rating */}
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        {/* Product price */}
        <Card.Text as="h3">{product.price} Birr</Card.Text>
        <div>
          <a className="btn btn-light m-3" href={product.image} role="button">
            <i className="fas fa-eye"></i> full screen
          </a>
          <Link className="btn btn-light m-3" to={`/product/${product._id}`}>
            buy
          </Link>
          <Button className="m-3 p-3 " onClick={downloadImage}>
            Download!
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
