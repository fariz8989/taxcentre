import React from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
export default function NewsCarousel() {
  return (
    <>
      <div className="w-full bg-gray-800">
        <Carousel
          arrows={true}
          prevArrow={<LeftOutlined />}
          nextArrow={<RightOutlined />}
          autoplay={false}
          autoplaySpeed={3000}
        >
          <div className="carousel-item">
            <Link to={"/news/test"}>
            <div className="carousel-image carousel-1"></div>
            <div className="carousel-text">
                <span>Kamis, 3 Maret 2023</span>
                <h1>Penerapan Pajak Karbon pada PLTU A</h1>
            </div>
            </Link>

          </div>
          <div className="carousel-item">
            <div className="carousel-image carousel-1"></div>
            
          </div>
         
          
        </Carousel>
      </div>
    </>
  );
}
