import { Container, Row, Col } from 'react-bootstrap';
import React, { useEffect, useState } from "react";

const productPage = (props) => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(false);

  const fetchProduct = async () => {
    try{
      const response = await fetch("http://localhost:3001/products/${id}")
    } catch (error) {
      console.log(error.message);
    }
  }
    return (
      <Container>
        <Row>
          <Col>
            <Img src="${props.imageUrl}" alt="product image" />
          </Col>
          <Col><h3>${props.name}</h3></Col>
          <Col></Col>
        </Row>
      </Container>
    );
};

export default productPage;