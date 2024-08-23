import React from "react";
import "../styles/App.css";

const ItemBlock = ({ item }) => {
  return (
    <div className="item-block">
      <div className="img-block">
        <img src={item.img} />
      </div>
      <div className="content-block">
        <div className="title-block">
          <span className="title">{item.title}</span>
          <span className="price">{item.price}</span>
        </div>
        <div>
          <p className="desc">{item.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemBlock;
