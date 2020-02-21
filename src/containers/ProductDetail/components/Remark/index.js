import React, { Component } from "react";
import "./style.css";

class Remark extends Component {
  render() {
    return (
      <div className="remark">
        <div className="remark_header">
          购买须知
          <i className="remark_icon"></i>
        </div>
        <div className="remark_list">
          <dl className="remark_item">
            <dt className="remark_itemTitle">有效期</dt>
            <dd className="remark_itemDesc">2018-10-20至2019-09-15</dd>
          </dl>
          <dl className="remark_item">
            <dt className="remark_itemTitle">有效期</dt>
            <dd className="remark_itemDesc">2018-10-20至2019-09-15</dd>
          </dl>
        </div>
        <dl className="remark_item">
          <dt className="remark_itemTitle">有效期</dt>
          <dd className="remark_itemDesc">2018-10-20至2019-09-15</dd>
        </dl>
        <dl className="remark_item">
          <dt className="remark_itemTitle">有效期</dt>
          <dd className="remark_itemDesc">2018-10-20至2019-09-15</dd>
        </dl>
        <dl className="remark_item">
          <dt className="remark_itemTitle">有效期</dt>
          <dd className="remark_itemDesc">2018-10-20至2019-09-15</dd>
        </dl>
      </div>
    );
  }
}

export default Remark;
