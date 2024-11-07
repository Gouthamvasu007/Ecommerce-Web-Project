import React from "react";

const CustomButton = ({children , ...otherProps}) => {
    return (
        <button {...otherProps} className="custom-button">
            {children}
        </button>
    );
};

export default CustomButton;
