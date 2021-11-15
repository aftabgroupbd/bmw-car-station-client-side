import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import FeatureProduct from './FeatureProduct/FeatureProduct';

const FeatureProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const url = `https://immense-gorge-36476.herokuapp.com/feature-products`
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
        <div className="mt-4">
            <Container>
                <h1>Feature Products:</h1>
                <Row xs={1} md={2} className="g-4">
                    {
                        products.map(product => <FeatureProduct key={product._id} product={product}></FeatureProduct>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default FeatureProducts;