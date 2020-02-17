import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import ErrorToast from "../../components/ErrorToast";
import "./style.css";
import { actions as appActions, getError } from "../../redux/modules/app";
import Home from "../Home";
import ProductDetail from "../ProductDetail";

class App extends Component {
  render() {
    const {
      error,
      appActions: { clearError }
    } = this.props;
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/detail/:id" component={ProductDetail}></Route>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
        {error && <ErrorToast msg={error} clearError={clearError} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: getError(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    appActions: bindActionCreators(appActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
