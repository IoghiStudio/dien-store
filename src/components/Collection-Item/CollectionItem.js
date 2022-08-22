import React from "react";
import './CollectionItem.scss';
import CustomButtom from "../CustomButton/CustomButton";

const CollectionItem = ({id , name , price , imageUrl}) => (
  <div className="collection-item">
    <div 
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButtom inverted>Add to cart</CustomButtom>
  </div>
);

export default CollectionItem;