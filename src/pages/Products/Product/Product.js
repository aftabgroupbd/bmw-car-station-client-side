import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, title, price, description, img } = product;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <b>{price}</b>
                    </Card.Text>
                    <Card.Text>
                        {description.substring(0, 80)}....
                    </Card.Text>
                    <div className="text-end mt-3">
                        <Link to={`/order/${_id}`}>
                            <button className="btn btn-warning tbn-sm">Purchase </button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;