import React from "react";
import './CartItem.scss';

const CartItem = ({ item: {imageUrl , price , name , quantity} }) => (
  <div className="card-item">
    <img src={imageUrl} alt='item' width='50px' />
    <div className="item-details">
      <span className="name">{name} </span>
      <span className="price">{quantity} x ${price}</span>
    </div>
  </div>
)

export default CartItem;