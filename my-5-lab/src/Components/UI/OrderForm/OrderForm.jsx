import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";

import classes from "./OrderForm.module.css";

const OrderForm = ({ children, orderData, submitHandler }) => {
    const [order, setOrder] = useState(
        orderData
            ? orderData
            : {
                  title: "",
                  status: "",
                  description: "",
                  customer: "",
                  completeTime: "",
              }
    );

    const router = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        submitHandler(order);
        setOrder({
            title: "",
            status: "",
            description: "",
            customer: "",
            completeTime: "",
        });

        router("/orders");
    };

    const routeToRouter = (e) => {
        e.preventDefault();

        router("/orders");
    };

    return (
        <form className={classes.form}>
            <h2 className={classes.formHeader}>{children}</h2>
            <div className={classes.inputs}>
                <Input
                    type="text"
                    placeholder="Title"
                    value={order.title}
                    onChange={(e) =>
                        setOrder({ ...order, title: e.target.value })
                    }
                />
                <Input
                    type="text"
                    placeholder="Status"
                    value={order.status}
                    onChange={(e) =>
                        setOrder({ ...order, status: e.target.value })
                    }
                />
                <Input
                    type="text"
                    placeholder="Customer"
                    value={order.customer}
                    onChange={(e) =>
                        setOrder({ ...order, customer: e.target.value })
                    }
                />
                <Input
                    type="text"
                    placeholder="Complete time"
                    value={order.completeTime}
                    onChange={(e) =>
                        setOrder({ ...order, completeTime: e.target.value })
                    }
                />
                <Input
                    type="text"
                    placeholder="Description"
                    value={order.description}
                    onChange={(e) =>
                        setOrder({ ...order, description: e.target.value })
                    }
                />
            </div>
            <Button onClick={submit}>{children}</Button>
            <Button onClick={routeToRouter}>Cancel</Button>
        </form>
    );
};

export default OrderForm;