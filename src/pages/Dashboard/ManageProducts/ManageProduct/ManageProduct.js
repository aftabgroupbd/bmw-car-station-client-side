import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageProduct = ({ product }) => {
    const { _id, title, price, description, img } = product;
    return (
        <Col>
            <Card style={{ minHeight: '375px' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <b>{price}</b>
                    </Card.Text>
                    <Card.Text style={{ height: '100px', overflowY: 'scroll' }}>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ManageProduct;