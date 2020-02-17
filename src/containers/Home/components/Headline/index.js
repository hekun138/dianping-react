import React, { Component } from "react";
import Slider from "react-slick";
import { dataSource } from "./data";
import "./style.css";
class Headline extends Component {
  render() {
    const settings = {
      slidesToShow: 1,
      swipeToSlide: true,
      autoplay: true,
      vertical: true
    };
    return (
      <div className="headline">
        <div className="headline_logo"></div>
        <div className="headline_slider">
          <Slider {...settings}>
            {dataSource.map((item, index) => {
              return (
                <a key={index} className="headline_sliderInner" href={item.url}>
                  <div className="headline_sliderTitle">{item.title}</div>
                  <div className="headline_sliderImgWrapper">
                    <img alt="" className="headline_slideImg" src={item.pic} />
                  </div>
                </a>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Headline;
