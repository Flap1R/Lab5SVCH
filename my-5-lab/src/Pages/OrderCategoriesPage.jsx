import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import OrderForm from "../Components/UI/OrderForm/OrderForm";

import classes from "../Styles/OrderCategoriesPage.module.css";

const OrderCategoriesPage = ({ categoriesHandler }) => {

    return (
        <div className={classes.orderCategoriesPage}>
            <Header />
            <main className={classes.main}>
                <OrderForm submitHandler={categoriesHandler}>Add Categories</OrderForm>
            </main>
            <Footer />
        </div>
    );
};

export default OrderCategoriesPage;