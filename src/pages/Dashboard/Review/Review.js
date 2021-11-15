import React, { useState } from 'react';
import { Card, Col, Container, Form, Row, Spinner, Button } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const [isReviewed, setIsReviewed] = useState(false);

    const handelReviewSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const rating = e.target.rating.value;
        const comment = e.target.comment.value;
        const reviewData = {
            name: name,
            email: email,
            rating: rating,
            comment: comment
        }
        setIsReviewed(true);
        fetch('https://immense-gorge-36476.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added a review.');
                    e.target.reset();
                }
                setIsReviewed(false);
            })
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Form onSubmit={handelReviewSubmit} className="text-start">
                                    <h2 className="text-center">Your Review</h2>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control defaultValue={user.displayName} type="text" name="name" required placeholder="Enter name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control required defaultValue={user.email} type="email" name="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicRating">
                                        <Form.Label>Rating</Form.Label>
                                        <Form.Select name="rating" required>
                                            <option value="5">5</option>
                                            <option value="4">4</option>
                                            <option value="3">3</option>
                                            <option value="2">2</option>
                                            <option value="1">1</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicComment">
                                        <Form.Label>Comment</Form.Label>
                                        <Form.Control as="textarea" required rows={3} type="text" name="comment" placeholder="Enter Comment" />
                                    </Form.Group>
                                    <div className="mt-2 text-end">
                                        {
                                            isReviewed ?
                                                <Spinner animation="border" variant="danger" />
                                                :
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                        }

                                    </div>

                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Review;