import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
const Register = () => {
    const { user, registerUser, isLoading, authError } = useAuth();
    const [registerData, setRegisterData,] = useState({});
    const history = useHistory();
    const handelOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }
    const handelRegisterSubmit = (e) => {
        e.preventDefault();
        registerUser(registerData.email, registerData.password, registerData.name, history)
    }
    return (
        <div>
            <Header></Header>
            <div className="login">
                <Container>
                    <Row>
                        <Col className="col-md-6 m-auto text-start">
                            <Form onSubmit={handelRegisterSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" onBlur={handelOnBlur} name="name" placeholder="Enter name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" onBlur={handelOnBlur} name="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" onBlur={handelOnBlur} name="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Link to="/login">Already Registered? Please login</Link>
                                </Form.Group>
                                {
                                    isLoading ?
                                        <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        /> :
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                }
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;