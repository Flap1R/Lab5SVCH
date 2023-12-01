import React from "react";

import cl from "../Styles/OrderDetails.module.css";

const OrderDetails = ({ order }) => {
    return (
        <div className={cl.orderDetails}>
            <h2 className={cl.title}>{order.title}</h2>
            <div className={cl.details}>
                <p className={cl.detail}>
                    <b>Id:</b> {order.id}
                </p>
                <p className={cl.detail}>
                    <b>Status:</b> {order.status}
                </p>
                <p className={cl.detail}>
                    <b>Quantity:</b> {order.quantity}
                </p>
                <p className={cl.detail}>
                    <b>Customer:</b> {order.customer}
                </p>
                <p className={cl.detail}>
                    <b>Product Type:</b> {order.productType}
                </p>
            </div>
        </div>
    );
};

export default OrderDetails;