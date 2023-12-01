import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import OrderForm from "../Components/UI/OrderForm/OrderForm";
import Footer from "../Components/Footer";

import classes from "../Styles/OrderEditionPage.module.css";

const OrderEditionPage = ({ orders, editHandler }) => {
    const params = useParams();
    const orderToEdit = orders.find(
        (order) => order.id === parseInt(params.id)
    );

    return (
        <div className={classes.orderEditionPage}>
            <Header />
            <main className={classes.main}>
                <OrderForm orderData={orderToEdit} submitHandler={editHandler}>
                    Edit
                </OrderForm>
            </main>
            <Footer />
        </div>
    );
};

export default OrderEditionPage;