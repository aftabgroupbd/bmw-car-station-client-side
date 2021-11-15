import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const AllOrder = (props) => {
    const { _id, productid, name, status } = props.order;
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
    const updateOrderStatus = (id) => {
        setIsLodaing(true);
        let updateStatus = '';
        if (status === 'Pending') {
            updateStatus = 'shipped';
        }
        if (status === 'shipped') {
            updateStatus = 'Pending';
        }
        const order = {
            status: updateStatus
        };
        const url = `https://immense-gorge-36476.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            }, body: JSON.stringify(order)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Successfully updated');
                    window.location.reload();
                } else {
                    alert("Not updated");
                }
                setIsLodaing(false);
            })
    }
    let statusClass = '';
    if (status === 'Pending') {
        statusClass = 'btn btn-warning me-2'
    }
    if (status === 'shipped') {
        statusClass = 'btn btn-success me-2'
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
                {name}
            </td>
            <td>
                {orderProduct.title}
            </td>
            <td>
                {orderProduct.price}
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
                        <>
                            <button title="click here to update status" className={statusClass} onClick={() => updateOrderStatus(_id)}>{status}</button>
                            <button className="btn btn-danger btn-sm" onClick={() => removeOrder(_id)}>X</button>
                        </>
                }

            </td>
        </tr>
    );
};

export default AllOrder;