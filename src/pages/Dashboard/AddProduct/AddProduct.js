import React, { useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';

const AddProduct = () => {
    const [productData, setProductData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handelOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newProductData = { ...productData };
        newProductData[field] = value;
        setProductData(newProductData);
    }
    const handelProductSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        fetch('https://immense-gorge-36476.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added a product.');
                    e.target.reset();
                }
                setIsLoading(false);
            })

    }
    return (
        <Form className="text-start bg-white p-5" onSubmit={handelProductSubmit}>
            <h1 className="text-center">Add A New Product</h1>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" onBlur={handelOnChange} required placeholder="Enter product title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" name="price" onBlur={handelOnChange} required placeholder="Enter product price" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="image_url">
                <Form.Label>Image Url</Form.Label>
                <Form.Control type="text" name="img" onBlur={handelOnChange} required placeholder="Enter product image url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} onBlur={handelOnChange} type="text" required name="description" placeholder="Enter product description" />
            </Form.Group>

            <div style={{ textAlign: 'right' }}>
                {
                    isLoading ?
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        :
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                }

            </div>
        </Form>
    );
};

export default AddProduct;