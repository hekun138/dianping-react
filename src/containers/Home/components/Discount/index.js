import React, { Component } from "react";
import { dataSource } from "./data";
import "./style.css";

class Discount extends Component {
  render() {
    const data = dataSource;
    return (
      <div className="discount">
        <a className="discount_header">
          <span className="discount_title">超值特惠</span>
          <span className="discount_more">更多优惠</span>
          <span className="discount_arrow"></span>
        </a>
        <div className="discount_content">
          {data.map((item, index) => {
            return (
              <a key={item.id} className="discount_item" href={item.url}>
                <div className="discount_itemPic">
                  <img width="100%" height="100%" src={item.picture} />
                </div>
                <div className="discount_itemTitle">{item.shop}</div>
                <div className="discount_itemPriceWrapper">
                  <ins className="discount_itemCurrentPrice">
                    {item.currentPrice}
                  </ins>
                  <del className="discount_itemOldPrice">{item.oldPrice}</del>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Discount;
