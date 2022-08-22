import React from "react";
import {ReactComponent as ShoppingIcon } from '../../Assets/122 shopping-bag.svg'
import './CartIcon.scss';

import { connect } from "react-redux/es/exports";
import { toggleCartHidden } from "../../redux/cart/cartActions";

const CartIcon = ({ toggleCartHidden , itemCount}) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
)

const mapStateToProps = ({ cart: { cartItems} }) => ({
  itemCount: cartItems.reduce((acc , cartItem) => acc + cartItem.quantity , 0)
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(CartIcon);