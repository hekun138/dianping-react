import React, { Component } from "react";
import "./style.css";

class ErrorToast extends Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.clearError();
    }, 3000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    return (
      <div className="errorToast">
        <div className="errorToast_text"></div>
      </div>
    );
  }
}

export default ErrorToast;
