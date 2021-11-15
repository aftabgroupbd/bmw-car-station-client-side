import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Login.css';
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handelOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);
    }
    const SubmitLoginForm = (e) => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history)
    }


    const handelGoogleSign = () => {
        signInWithGoogle(location, history);
    }
    return (
        <div>
            <Header></Header>
            <div className="login">
                <Container>
                    <Row>
                        <Col className="col-md-6 m-auto text-start">
                            <Form onSubmit={SubmitLoginForm}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control onBlur={handelOnChange} type="email" name="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control onBlur={handelOnChange} type="password" name="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Link to="/register">Create new account?</Link>
                                </Form.Group>
                                {
                                    user?.email && <div class="alert alert-success" role="alert">
                                        User login successfully.
                                    </div>
                                }
                                {
                                    authError && <div class="alert alert-danger" role="alert">
                                        {authError}
                                    </div>
                                }

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
                            {
                                isLoading ?
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    : <Button variant="warning" className="mt-4" onClick={handelGoogleSign}>
                                        Google Sign In
                                    </Button>
                            }

                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;