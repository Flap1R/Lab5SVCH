import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/UI/Button/Button";

import classes from "../Styles/Order.module.css";

const Order = ({ orderData, detailsHandler, deleteHandler }) => {
    const router = useNavigate();

    return (
        <div className={classes.order}>
            <div className={classes.orderInfo}>
                <p className={classes.orderId}>{orderData.id}</p>
                <p className={classes.orderTitle}>{orderData.title}</p>
                <p className={classes.orderStatus}>{orderData.status}</p>
            </div>
            <div className={classes.orderButtons}>
                <Button onClick={() => detailsHandler(orderData)}>
                    Details
                </Button>
                <Button onClick={() => router(`/orders/edit/${orderData.id}`)}>
                    Edit
                </Button>
                <Button onClick={() => deleteHandler(orderData.id)}>
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default Order;