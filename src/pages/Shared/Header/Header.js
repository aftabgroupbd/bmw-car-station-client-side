import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <Container>
                <Navbar className="header-content" variant="dark" collapseOnSelect expand="lg" sticky="top">
                    <Container>
                        <Navbar.Brand as={Link} to="/home">BMW CAR STATION</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/cars">Cars</Nav.Link>
                            {
                                user?.email ?
                                    <>
                                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                                        <Button onClick={logOut} variant="warning" size="sm">Logout</Button>
                                        <Navbar.Text className="ms-2">
                                            Signed in as: <a href="#">{user.displayName}</a>
                                        </Navbar.Text>
                                    </> :
                                    <>
                                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                    </>
                            }
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;