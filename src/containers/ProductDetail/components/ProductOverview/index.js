import React, { Component } from "react";
import "./style.css";

class ProductOverview extends Component {
  render() {
    return (
      <div className="productOverview">
        <div className="productOverview_header">
          <div className="productOverview_imgContainer">
            <img
              alt=""
              className="productOverview_img"
              src="https://p0.meituan.net/deal/e6864ed9ce87966af11d922d5ef7350532676.jpg@450w_280h_1e_1c_1l|watermark=1&&r=1&p=9&x=2&y=2&relative=1&o=20"
            />
            <div className="productOverview_baseInfo">
              <div className="productOverview_title">院落创意菜</div>
              <div className="productOverview_content">
                仅售19.9元！价值48元的百香果（冷饮）1扎，提供免费WiFi。
              </div>
            </div>
          </div>
        </div>
        <div className="productOverview_purchase">
          <span className="productOverview_symbol">￥</span>
          <span className="productOverview_price">19.9</span>
          <span className="productOverview_price-old">￥48</span>
          <a className="productOverview_btn">立即购买</a>
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
