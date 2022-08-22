import React from "react";
import {ReactComponent as ShoppingIcon } from '../../Assets/122 shopping-bag.svg'
import './CartIcon.scss';
import { connect } from "react-redux/es/exports";
import { toggleCartHidden } from "../../redux/cart/cartActions";

const CartIcon = () => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden)
})

export default connect(
  null,
  mapDispatchToProps
  )(CartIcon);