import React from 'react';
import Navigation from './Navigation';

import classes from "../Styles/Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <h1 className={classes.headerText}>Notarial office</h1>
            <Navigation />
        </header>
    );
}

export default Header;