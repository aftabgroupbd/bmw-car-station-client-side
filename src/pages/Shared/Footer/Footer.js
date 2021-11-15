import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import googlePlay from '../../../images/google-paly.png';
import appStore from '../../../images/app-store.png';
const Footer = () => {
    const footer_page = {
        margin: '0px',
        color: '#fff',
    }
    return (
        <div>
            <Container style={{ background: "#16181c", paddingTop: '20px' }}>
                <Row>
                    <Col className="col-md-6">
                        <p style={footer_page}>Home</p>
                        <p style={footer_page}>Services</p>
                        <p style={footer_page}>Products</p>
                    </Col>
                    <Col className="col-md-6">
                        <Row>
                            <Col className="col-md-4">
                            </Col>
                            <Col className="col-md-4">
                                <img src={appStore} style={{ width: '100%' }} alt="" />
                            </Col>
                            <Col className="col-md-4">
                                <img src={googlePlay} style={{ width: '100%' }} alt="" />
                            </Col>
                        </Row>
                    </Col>
                    <Col className="col-md-12" style={{ borderTop: '1px solid #8f8f8f', marginTop: '5px', color: '#fff', paddingTop: '15px', }}>
                        <p>© 2021. bmw-car-station | Visitor Agreement & Privacy Policy</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;