import React from "react";

import classes from "../Styles/Footer.module.css";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <a
                className={classes.footerLink}
                href="https://github.com/flap1r"
                target="_blank"
                rel="noreferrer"
            >
                GitHub
            </a>
            <span className={classes.footerText}>&copy; 2023 | Ivan Samolazov</span>
        </footer>
    );
};

export default Footer;