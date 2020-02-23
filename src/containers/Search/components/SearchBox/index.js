import React, { Component } from 'react'
import { data } from "./data";
import "./style.css";

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    }
  }

  renderSuggestList() {
    return (
      <ul className="searchBox_list">
        {
          data.map(item => {
            return (
              <li key={item.id} className="searchBox_item">
                <span className="searchBox_itemKeyword">{item.keyword}</span>
                <span className="searchBox_itemQuantity">{item.quantity}</span>
              </li>
            )
          })
        }
      </ul>
    )
  }

  handleChange = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }

  handleClear = () => {
    this.setState({
      inputText: ''
    })
  }

  handleCancel = () => {

  }

  render() {
    return (
      <div className="searchBox">
        <div className="searchBox_container">
          <input className="searchBox_text" value={this.state.inputText} onChange={this.handleChange}/>
          <span className="serachBox_clear" onClick={this.handleClear}></span>
          <span className="searchBox_cancel" onClick={this.handleCancel}>取消</span>
        </div>
        {this.state.inputText.length > 0 ? this.renderSuggestList() : null}
      </div>
    )
  }
}
