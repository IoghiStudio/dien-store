import React from "react";
import './CartDropdown.scss';
import CustomButtom from "../CustomButton/CustomButton";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>
  </div>
)

export default CartDropdown;