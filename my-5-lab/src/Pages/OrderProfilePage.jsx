import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PageForm from "../Components/UI/PageForm/PageForm";

import classes from "../Styles/OrderProfilePage.module.css";

const OrderProfilePage = ({ profileHandler }) => {
    
    return (
      <div className={classes.orderProfilePage}>
      <Header />
      <main className={classes.main}>
          <PageForm submitHandler={profileHandler}>Add Categories</PageForm>
      </main>
      <Footer />
  </div>
    );
};

export default OrderProfilePage;
