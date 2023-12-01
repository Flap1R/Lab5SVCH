import React from "react";
import { Link } from "react-router-dom";

import classes from "../Styles/Navigation.module.css";

const Navigation = () => {
    return (
        <nav className={classes.navigation}>
            <Link to="/orders" className={classes.navigationLink}>
                All orders
            </Link>
            <Link to="/orders/create" className={classes.navigationLink}>
                Create order
            </Link>
        </nav>
    );
};

export default Navigation;