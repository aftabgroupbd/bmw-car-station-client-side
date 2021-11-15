import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import AllOrder from './AllOrder/AllOrder';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isDeleted, setDeleted] = useState(false);
    useEffect(() => {
        const url = `https://immense-gorge-36476.herokuapp.com/all-orders`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setIsLoading(false);
            });
    }, []);
    const removeOrder = (id) => {
        const proceed = window.confirm('Are you sure,you want to delete this item?');
        if (proceed) {
            setDeleted(true);
            const url = `https://immense-gorge-36476.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('successfully deleted');
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                    setDeleted(false);
                })
        }

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
            <h1>Manage Orders</h1>
            <Table striped bordered hover className="bg-white">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Product Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <AllOrder key={order._id} isDeleted={isDeleted} removeOrder={removeOrder} order={order}></AllOrder>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default AllOrders;