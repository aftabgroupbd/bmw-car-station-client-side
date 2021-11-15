import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner, Button, Form, Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Order = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [product, setProduct] = useState([]);
    const [isOrder, setIsOrder] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        const url = `https://immense-gorge-36476.herokuapp.com/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setIsLoading(false);
            });
    }, []);
    const handelOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

    }
    const handelOrderProcess = (e) => {
        e.preventDefault();
        setIsOrder(true);
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;

        if (!name) {
            alert('The name field is required!');
            setIsOrder(false);
            return false;
        }
        if (!email) {
            alert('The email field is required!');
            setIsOrder(false);
            return false;
        }
        if (!phone) {
            alert('The phone field is required!');
            setIsOrder(false);
            return false;
        }
        if (!address) {
            alert('The address field is required!');
            setIsOrder(false);
            return false;
        }
        const order = {
            productid: id,
            userId: user.uid,
            name: name,
            phone: phone,
            email: email,
            address: address,
            status: 'Pending'
        };
        fetch("https://immense-gorge-36476.herokuapp.com/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setIsOrder(false);
                    history.push('/order-success')
                }
            })
    }
    if (isLoading) {
        return (
            <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
            />
        );
    }
    return (
        <div>
            <Header></Header>
            <Container >
                <Row style={{ minHeight: '85vh', alignItems: 'center' }}>
                    <Col className="col-md-6">
                        <Card>
                            <Card.Img variant="top" src={product.img} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>
                                    <b>{product.price}</b>
                                </Card.Text>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-md-6">
                        <h1>Your Information</h1>
                        <Card>
                            <Card.Body className="text-start">
                                <Form onSubmit={handelOrderProcess}>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control onBlur={handelOnChange} defaultValue={user.displayName} type="text" name="name" placeholder="Enter name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control onBlur={handelOnChange} defaultValue={user.email} type="email" name="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPhone">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control onBlur={handelOnChange} type="text" name="phone" placeholder="Enter phone" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicAddress">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control as="textarea" rows={3} onBlur={handelOnChange} type="text" name="address" placeholder="Enter Address" />
                                    </Form.Group>
                                    <div className="mt-2 text-end">
                                        {
                                            isOrder ?
                                                <Spinner animation="border" variant="danger" />
                                                :
                                                <button type="submit" className="btn btn-primary">Place order</button>
                                        }

                                    </div>

                                </Form>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Order;