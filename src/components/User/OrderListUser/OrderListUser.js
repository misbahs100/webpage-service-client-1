import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import OrderListDetail from '../OrderListDetail/OrderListDetail';

const OrderListUser = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${loggedInUser.email}`)
        .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data);
            })
    }, [])
    return (
        <div className="row">
        {
           orders.map( order => <OrderListDetail order={order}></OrderListDetail>)
       }
        </div>
    );
};

export default OrderListUser;