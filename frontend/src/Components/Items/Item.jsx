import React from 'react';
import './Item.css';

const Item = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="item pic" />
      <p>{props.name}</p>
      <item className="item-price">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </item>
    </div>
  );
};

export default Item;
