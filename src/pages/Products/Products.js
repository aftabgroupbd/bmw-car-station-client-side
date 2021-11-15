import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Product from './Product/Product';

const Products = () => {
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
        <div>
            <Header></Header>
            <Container className="my-4">
                <h1 className="text-start">Products:</h1>
                <Row xs={1} md={3} className="g-4">
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Products;