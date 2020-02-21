import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class LikeItem extends Component {
  render() {
    const {
      id,
      shop,
      tag,
      picture,
      product,
      currentPrice,
      oldPrice,
      saleDesc
    } = this.props.data;
    return (
      <Link to={`/detail/${id}`} className="likeItem">
        <div className="likeItem_picContainer">
          <div className="likeItem_picTag">{tag}</div>
          <img alt="" className="likeItem_pic" src={picture} />
        </div>
        <div className="likeItem_content">
          <div className="likeItem_shop">{shop}</div>
          <div className="likeItem_product">{product}</div>
          <div className="likeItem_detail">
            <div className="likeItem_price">
              <ins className="likeItem_currentPrice">{currentPrice}</ins>
              <del className="likeItem_oldPrice">{oldPrice}</del>
            </div>
            <div className="likeItem_sale">{saleDesc}</div>
          </div>
        </div>
      </Link>
    );
  }
}

export default LikeItem;
