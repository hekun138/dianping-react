import React, { Component } from "react";
import { dataSource } from "./data";
import LikeItem from "../LikeItem";
import "./style.css";

class LikeList extends Component {
  render() {
    return (
      <div className="likeList">
        <div className="likeList_header">猜你喜欢</div>
        <div className="likelist_list">
          {dataSource.map((item, index) => {
            return <LikeItem key={item.id} data={item} />;
          })}
        </div>
      </div>
    );
  }
}

export default LikeList;
