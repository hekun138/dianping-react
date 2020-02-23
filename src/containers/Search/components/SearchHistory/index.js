import React, { Component } from "react";
import "./style.css";

class SearchHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["烤鸭", "火锅", "面条"]
    };
  }
  handleClick = () => {};

  handleClear = () => {
    this.setState({
      data: []
    });
  };

  render() {
    return (
      <div className="searchHistory">
        <div className="searchHistory_header">搜索记录</div>
        <ul className="searchHistory_list">
          {this.state.data.map((item, index) => {
            return (
              <li
                onClick={this.handleClick}
                className="searchHistory_item"
                key={index}
              >
                {item}
              </li>
            );
          })}
        </ul>
        <div onClick={this.handleClear} className="searchHistory_clear">
          清除搜索记录
        </div>
      </div>
    );
  }
}

export default SearchHistory;
