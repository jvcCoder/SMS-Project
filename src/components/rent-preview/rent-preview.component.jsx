import React from "react";
import CollectionItem from "../collection-item/collection-item.components";
import "./rent-preview.style.scss";

const RentPreview = ({ title, items }) => (
  <div className='rent-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((_item, idx) => idx < 2)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
    <div className='steps'> * Click on the image to add item to checkout </div>
    <div className='steps1'>* Next, just click on the shop icon in the top right </div>
    <div className='steps2'>* Go to checkout page and do the payment </div>
    
  </div>
);

export default RentPreview;
