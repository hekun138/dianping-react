import React, { Component } from "react";
import Slider from "react-slick";
import { dataSource } from "./data";
import "./style.css";

class Category extends Component {
  render() {
    const setting = {
      dots: true,
      arrows: false,
      slidesToShow: 1,
      swipeToSlide: true,
      autoplay: true
    };
    return (
      <div className="category">
        <Slider {...setting}>
          {dataSource.map((section, index) => {
            return (
              <div key={index}>
                {section.map((item, i) => {
                  return (
                    <div key={i} className="category_section">
                      <img className="category_icon" src={item.src} />
                      <div>
                        <span className="category_text">{item.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default Category;
