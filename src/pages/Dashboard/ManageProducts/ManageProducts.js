import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import ManageProduct from './ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const url = `https://immense-gorge-36476.herokuapp.com/products`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setIsLoading(false)
            });
    }, []);
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

        <>
            <h1 className="text-start">Products:</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    products.map(product => <ManageProduct key={product._id} product={product}></ManageProduct>)
                }
            </Row>
        </>
    );
};

export default ManageProducts;