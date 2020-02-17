import React, { Component } from "react";

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
        <div className="productOverview_purchase"></div>
        <ul className="productOverview_remarkItem">
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default ProductOverview;
