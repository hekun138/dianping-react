import React, { Component } from "react";
import { dataSource } from "./data";
import LikeItem from "../LikeItem";
import Loading from "../../../../components/Loading";
import "./style.css";

class LikeList extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      data: dataSource,
      loadTimes: 1
    };
    this.removeListener = false;
  }

  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    if (this.state.loadTimes >= 3 && !this.removeListener) {
      document.removeEventListener("scroll", this.handleScroll);
      this.removeListener = true;
    }
  }

  componentWillUnmount() {
    if (!this.removeListener) {
      document.removeEventListener("scroll", this.handleScroll);
    }
  }

  //处理屏幕滚动事件，实现加载更多的效果
  handleScroll = () => {
    //获取滚动高度
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    //获取屏幕可视区域的高度
    const screenHeight = document.documentElement.clientHeight;
    //获取likeList这个组件距离顶部页面高度的距离
    const likeListTop = this.myRef.current.offsetTop;
    //获取likeList内容的高度
    const likeListHeight = this.myRef.current.offsetHeight;

    if (scrollTop > likeListHeight + likeListTop - screenHeight) {
      const newData = this.state.data.concat(dataSource);
      const newLoadTimes = this.state.loadTimes + 1;
      setTimeout(() => {
        this.setState({
          data: newData,
          loadTimes: newLoadTimes
        });
      }, 1000);
    }
  };

  render() {
    const { data, loadTimes } = this.state;
    return (
      <div ref={this.myRef} className="likeList">
        <div className="likeList_header">猜你喜欢</div>
        <div className="likelist_list">
          {data.map((item, index) => {
            return <LikeItem key={index} data={item} />;
          })}
        </div>
        {loadTimes < 3 ? (
          <Loading />
        ) : (
          <a className="likeList_viewAll">查看更多</a>
        )}
      </div>
    );
  }
}

export default LikeList;
