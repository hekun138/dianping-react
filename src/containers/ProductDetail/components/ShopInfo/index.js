import React, { Component } from "react";
import "./style.css";

class ShopInfo extends Component {
  render() {
    const { data: relatedShop, total } = this.props;
    const { shop: name, star, address, phone } = relatedShop;
    return (
      <div className="shopInfo">
        <div className="shopInfo_header">
          使用商户（{total}）<span className="shopInfo_arrow"></span>
        </div>
        <div className="shopInfo_middle">
          <div className="shopInfo_middleLeft">
            <div className="shopInfo_shopName">{name}</div>
            <div>
              <span className="shopInfo_stars">
                <i
                  className="shopInfo__stars--red"
                  style={{ width: 2 * star + "%" }}
                ></i>
              </span>
              <span className="shopInfo_distance">>100km</span>
            </div>
          </div>
          <a href={`tel://${phone}`} className="shopInfo_middleRight">
            <i className="shopInfo_phoneIcon"></i>
          </a>
        </div>
        <div className="shopInfo_bottom">
          <i className="shopInfo_locationIcon"></i>
          {address}
        </div>
      </div>
    );
  }
}

export default ShopInfo;
