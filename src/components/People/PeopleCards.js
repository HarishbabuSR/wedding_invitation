import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './People.css';

function PeopleCard({ image, name, role }) {
  return (
    <Col lg={4} md={6} sm={6} className="mb-4">
      <Card className="person-card">
        <div className="image-container">
          <Card.Img variant="top" src={image} />
        </div>
        {
          name && role ? 
          <Card.Body>
            <Card.Title className="text-center">{name}</Card.Title>
            <Card.Text className="text-center text-muted">{role}</Card.Text>
        </Card.Body> : null
        }
      </Card>
    </Col>
  );
}

export default PeopleCard;
