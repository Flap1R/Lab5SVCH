import React from "react";
import Order from "./Order";

import classes from "../Styles/OrderList.module.css";

const OrderList = ({ orders, detailsHandler, deleteHandler }) => {
    if (orders.length === 0) {
        return <h3 className={classes.emptyList}>No orders found</h3>;
    }

    return (
        <div className={classes.orderList}>
            {orders.map((order) => (
                <Order
                    key={order.id}
                    orderData={order}
                    detailsHandler={detailsHandler}
                    deleteHandler={deleteHandler}
                />
            ))}
        </div>
    );
};

export default OrderList;