import React, { Component } from "react";
import "./style.css";

class Detail extends Component {
  render() {
    const {
      detail: { category, products, remark, currentPrice, oldPrice }
    } = this.props.data;
    return (
      <div className="detail">
        <div className="detail_header">
          <span>团购详情</span>
          <i className="detail_headerIcon"></i>
        </div>
        <table cellPadding="0" cellSpacing="0" className="detail_table">
          <tbody>
            <tr className="detail_row">
              <th colSpan="3" className="detail_category">
                {category}
              </th>
            </tr>
            {products.map((item, index) => {
              return (
                <tr key={index} className="detail_row">
                  <td>{item.name}</td>
                  <td className="detail_row-alignRight">{item.quantity}</td>
                  <td className="detail_row-alignRight">{item.price}</td>
                </tr>
              );
            })}
            <tr>
              <td></td>
              <td className="detail_td-price">
                最高价值
                <br />
                <strong className="detail_td-priceNew">团购价</strong>
              </td>
              <td className="detail_td-price">
                {oldPrice}元
                <br />
                <strong className="detail_td-priceNew">{currentPrice}元</strong>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="detail_remark">{remark}</div>
        <div className="detail_more">
          <span>更多图文详情</span>
          <span className="detail_notice">
            （建议wifi环境下打卡，土豪请随意）
          </span>
          <i className="detail_arrow"></i>
        </div>
      </div>
    );
  }
}

export default Detail;
