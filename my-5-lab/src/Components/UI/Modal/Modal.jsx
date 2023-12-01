import React from "react";

import cl from "./Modal.module.css";

const Modal = ({ children, visible, setVisible }) => {
    const modalClasses = [cl.modal];

    if (visible) {
        modalClasses.push(cl.active);
    }

    return (
        <div
            className={modalClasses.join(" ")}
            onClick={() => setVisible(false)}
        >
            <div
                className={cl.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;