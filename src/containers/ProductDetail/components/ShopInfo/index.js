import React, { Component } from "react";
import "./style.css";

class ShopInfo extends Component {
  render() {
    return (
      <div className="shopInfo">
        <div className="shopInfo_header">
          使用商户（4）
          <span className="shopInfo_arrow"></span>
        </div>
        <div className="shopInfo_middle">
          <div className="shopInfo_middleLeft">
            <div className="shopInfo_shopName">院落创意菜</div>
            <div>
              <span className="shopInfo_stars">
                <i
                  className="shopInfo__stars--red"
                  style={{ width: "80%" }}
                ></i>
              </span>
              <span className="shopInfo_distance">>100km</span>
            </div>
          </div>
          <div className="shopInfo_middleRight">
            <i className="shopInfo_phoneIcon"></i>
          </div>
        </div>
        <div className="shopInfo_bottom">
          <i className="shopInfo_locationIcon"></i>北京朝阳区
        </div>
      </div>
    );
  }
}

export default ShopInfo;
