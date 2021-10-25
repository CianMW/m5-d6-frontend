import React, { Component } from "react";
import { Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class CatalogueItem extends Component {
  render() {
    const { name, description, price, brand, category, cover, _id } = this.props;
    return (
      <Link to={`/blog/${_id}`} className="blog-link">
        <Card className="blog-card">
          <Card.Img variant="top" src={`${cover}`} className="blog-cover" />
          <Card.Body>
            <Card.Title>{brand + " " + name}</Card.Title>
          </Card.Body>
          <Card.Footer>
              <p>`${price}`</p>
          </Card.Footer>
        </Card>
      </Link>
    );
  }
}