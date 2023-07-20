import React from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
export default function ServiceCarousel() {
  return (
    <>
      <div className="w-full bg-gray-800">
        <Carousel
          arrows={true}
          prevArrow={<LeftOutlined />}
          nextArrow={<RightOutlined />}
          effect="fade"
          autoplay={true}
          autoplaySpeed={3000}
        >
          <div className="carousel-item">
            <div className="carousel-image carousel-1"></div>
            <div className="carousel-text">
              <h1 className="carousel-title">TAX CONSULTING</h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                egestas mollis tincidunt. Quisque at nunc sit amet mi sagittis
                condimentum nec quis velit. Suspendisse et felis sodales,
                sodales velit porttitor, lobortis nibh.  
              </span>
              <Button props={{ type: "secondary", text: "Learn More" }} />
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-image carousel-2"></div>
            <div className="carousel-text">
              <h1 className="carousel-title">TAX RESEARCH</h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                egestas mollis tincidunt. Quisque at nunc sit amet mi sagittis
                condimentum nec quis velit. Suspendisse et felis sodales,
                sodales velit porttitor, lobortis nibh.  
              </span>
              <Link to={"/publication"}>
              <Button props={{ type: "secondary", text: "Learn More" }} />
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-image carousel-3"></div>
            <div className="carousel-text">
              <h1 className="carousel-title">TAX TRAINING</h1>
              <span>
                Tax Centre FIA UI melaksanakan program pelatihan sertifikasi, seminar dan workshop di bidang perpajakan dengan pengajar profesional baik dari akademisi dan praktisi 
              </span>
              <Link to={"/training"}>
              <Button props={{ type: "secondary", text: "Learn More"}} />
              </Link>
            </div>
          </div>
          
        </Carousel>
      </div>
    </>
  );
}
