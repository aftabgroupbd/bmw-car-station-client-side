import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const MyOrder = (props) => {
    const { _id, productid, status } = props.order;
    const { removeOrder, isDeleted } = props;
    const [orderProduct, setOrderProduct] = useState([]);
    const [isLoading, setIsLodaing] = useState(true);
    useEffect(() => {
        const url = `https://immense-gorge-36476.herokuapp.com/products/${productid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrderProduct(data);
                setIsLodaing(false);
            });
    }, []);
    let statusClass = '';
    if (status === 'Pending') {
        statusClass = 'text-warning'
    }
    if (status === 'Accept') {
        statusClass = 'text-success'
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
        <tr>
            <td>
                <img src={orderProduct.img} alt={orderProduct.title} style={{ width: '150px' }} />
            </td>
            <td>
                {orderProduct.title}
            </td>
            <td>
                {orderProduct.price}
            </td>
            <td className={statusClass}>
                {status}
            </td>
            <td>
                {
                    isDeleted ?
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        :
                        <button className="btn btn-danger btn-sm" onClick={() => removeOrder(_id)}>X</button>
                }

            </td>
        </tr>
    );
};

export default MyOrder;