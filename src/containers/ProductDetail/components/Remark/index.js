import React, { Component } from "react";
import "./style.css";

class Remark extends Component {
  render() {
    const { validityPeriod, purchaseNotes } = this.props.data;
    return (
      <div className="remark">
        <div className="remark_header">
          购买须知
          <i className="remark_icon"></i>
        </div>
        <div className="remark_list">
          <dl className="remark_item">
            <dt className="remark_itemTitle">有效期</dt>
            <dd className="remark_itemDesc">{validityPeriod}</dd>
          </dl>
          {purchaseNotes.map((item, index) => {
            return (
              <dl key={index} className="remark_item">
                <dt className="remark_itemTitle">{item.title}</dt>
                <dd className="remark_itemDesc">{item.content}</dd>
              </dl>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Remark;
