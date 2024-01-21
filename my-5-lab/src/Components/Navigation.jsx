import React from "react";
import { Link } from "react-router-dom";

import classes from "../Styles/Navigation.module.css";

const Navigation = () => {
    return (
        <nav className={classes.navigation}>
            <Link to="/orders" className={classes.navigationLink}>
                Main
            </Link>
            <Link to="/orders/categories" className={classes.navigationLink}>
                Categories
            </Link>
            <Link to="/orders/profile" className={classes.navigationLink}>
                Profile
            </Link>
        </nav>
    );
};

export default Navigation;