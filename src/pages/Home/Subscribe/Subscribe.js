import React, { useState } from 'react';
import { Card, Col, Container, Form, Row, Spinner } from 'react-bootstrap';

const Subscribe = () => {
    const [isLoading, setIsLoading] = useState(false);
    const handelSubscribeSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        if (!email) {
            alert('The email type field is required!');
            return false;
        }
        setIsLoading(true);
        fetch('https://immense-gorge-36476.herokuapp.com/subscribe', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully subscribed.');
                    e.target.reset();
                }
                setIsLoading(false);
            })
    }
    return (
        <Container>
            <Card style={{ marginBottom: '20px', background: ' #1f2229', color: '#fff' }}>
                <Card.Body>
                    <h3>Subscribe now for our upcoming product</h3>
                    <Row style={{ justifyContent: 'center' }}>

                        <Col className="col-md-6">
                            <Form onSubmit={handelSubscribeSubmit} className="text-start">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control required type="email" name="email" placeholder="Enter email" />
                                </Form.Group>
                                <div className="mt-2 text-end">
                                    {
                                        isLoading ?
                                            <Spinner animation="border" variant="danger" />
                                            :
                                            <button type="submit" className="btn btn-warning">Send</button>
                                    }

                                </div>

                            </Form>

                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Subscribe;