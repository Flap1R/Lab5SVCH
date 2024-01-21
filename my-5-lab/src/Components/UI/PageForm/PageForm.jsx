import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";

import classes from "./PageForm.module.css";

const PageForm = ({ children, orderData, submitHandler }) => {
  const [order, setOrder] = useState(
    orderData
        ? orderData
        : {
              notaryName: "",
              location: "",
          }
);

  const router = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    submitHandler(order);
    setOrder({
        notaryName: "",
        location: "",
        
    });

    router("/order/profile");
};

  const routeToRouter = (e) => {
    e.preventDefault();
    router("/orders/profile");
  };

  return (
    <form className={classes.form}>
      <h2 className={classes.formHeader}>{children}</h2>
      <div className={classes.inputs}>
        <Input
          type="text"
          placeholder="Notary Name"
          value={order.notaryName}
          onChange={(e) => setOrder({ ...order, notaryName: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Location"
          value={order.location}
          onChange={(e) => setOrder({ ...order, location: e.target.value })}
        />
      </div>
      <Button onClick={submit}>{children}</Button>
      <Button onClick={routeToRouter}>Cancel</Button>
    </form>
  );
};

export default PageForm;
