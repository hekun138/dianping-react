import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class ProductOverview extends Component {
  render() {
    const {
      id,
      shop,
      picture,
      description,
      currentPrice,
      oldPrice
    } = this.props.data;
    return (
      <div className="productOverview">
        <div className="productOverview_header">
          <div className="productOverview_imgContainer">
            <img alt="" className="productOverview_img" src={picture} />
            <div className="productOverview_baseInfo">
              <div className="productOverview_title">{shop}</div>
              <div className="productOverview_content">{description}</div>
            </div>
          </div>
        </div>
        <div className="productOverview_purchase">
          <span className="productOverview_symbol">￥</span>
          <span className="productOverview_price">{currentPrice}</span>
          <span className="productOverview_price-old">￥{oldPrice}</span>
          <Link to={`/purchase/${id}`} className="productOverview_btn">
            立即购买
          </Link>
        </div>
        <ul className="productOverview_remark">
          <li className="productOverview_remarkItem">
            <i className="productOverview_sign1"></i>
            <span className="productOverview_desc">随时可退</span>
          </li>
          <li className="productOverview_remarkItem">
            <i className="productOverview_sign2"></i>
            <span className="productOverview_desc">过期自动退</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProductOverview;
