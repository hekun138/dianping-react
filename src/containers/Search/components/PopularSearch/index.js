import React, { Component } from 'react'
import { data } from "./data";
import "./style.css";

export default class PopularSearch extends Component {
  render() {
    return (
      <div className="popularSearch">
        {
          data.map((item, index) => {
            return (
              <span key={index} className="popularSearch_item">{item}</span>
            )
          })
        }
      </div>
    )
  }
}
