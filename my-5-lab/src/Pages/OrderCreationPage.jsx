import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import OrderForm from "../Components/UI/OrderForm/OrderForm";

import classes from "../Styles/OrderCreationPage.module.css";

const OrderCreationPage = ({ creationHandler }) => {
    return (
        <div className={classes.orderCreationPage}>
            <Header />
            <main className={classes.main}>
                <OrderForm submitHandler={creationHandler}>Create</OrderForm>
            </main>
            <Footer />
        </div>
    );
};

export default OrderCreationPage;