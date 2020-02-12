import React, { Component } from "react";
import "./style.css";

class HomeHeader extends Component {
  render() {
    return (
      <div className="homeHeader">
        <header className="homeHeader_wrapper">
          <a className="homeHeader_city">北京</a>
          <a className="homeHeader_search">输入商户名、地点</a>
          <a className="homeHeader_self">
            <div className="homeHeader_portrait"></div>
          </a>
        </header>
      </div>
    );
  }
}

export default HomeHeader;
