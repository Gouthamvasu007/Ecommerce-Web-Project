import React, { useState } from "react";
import ShoppingBagSvg from "../../assets/bag";
import "./cart-icon.scss";
import CartDropdown from "../cartDropdown/CartDropdown";

const CartIcon = () => {
  const [hidden, setHidden] = useState(false);

  const handleDropdown = () => {
    setHidden(!hidden);
  };

  return (
    <div className="cart-icon" onClick={handleDropdown}>
      <ShoppingBagSvg className="shopping-icon" />
      {hidden ? <CartDropdown /> : null}
    </div>
  );
};

export default CartIcon;
