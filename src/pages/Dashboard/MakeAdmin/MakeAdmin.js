import React, { useState } from 'react';
import { Card, Form, Spinner } from 'react-bootstrap';

const MakeAdmin = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handelMakeAdminSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        if (!email) {
            alert('The email type field is required!');
            return false;
        }
        setIsLoading(true);
        fetch('https://immense-gorge-36476.herokuapp.com/make-admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Successfully create a new admin');
                    e.target.reset();
                }
                setIsLoading(false);
            })
    }
    return (
        <div>
            <Card>
                <Card.Body>
                    <Form onSubmit={handelMakeAdminSubmit} className="text-start">
                        <h2 className="text-center">Make Admin</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type="email" name="email" placeholder="Enter email" />
                        </Form.Group>
                        <div className="mt-2 text-end">
                            {
                                isLoading ?
                                    <Spinner animation="border" variant="danger" />
                                    :
                                    <button type="submit" className="btn btn-primary">Submit</button>
                            }

                        </div>

                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MakeAdmin;