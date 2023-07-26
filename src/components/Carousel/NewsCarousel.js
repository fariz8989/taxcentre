import React from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { date } from "../../helper/dateParser";
export default function NewsCarousel({ props }) {
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
            <Link to={`/news/${props.done === false ? "" : props.data[0]?.ID}`}>
              <div style={{backgroundImage:props?.done === false  ? '../../assets/no-image.png':`url(${props?.data[0].Foto})`}} className="carousel-image"></div>
              <div className="carousel-text">
                <span>
                  {props.done === false
                    ? ""
                    : date.parse(props?.data[0]?.Created)}{" "}
                </span>
                <h1>{props.done === false ? "" : props.data[0]?.Title}</h1>
              </div>
            </Link>
          </div>
          <div className="carousel-item">
            <Link to={`/news/${props.done === false ? "" : props.data[1]?.ID}`}>
              <div style={{backgroundImage:props?.done === false  ? '../../assets/no-image.png':`url(${props?.data[1].Foto})`}} className="carousel-image1"></div>
              <div className="carousel-text">
                <span>
                  {props.done === false
                    ? ""
                    : date.parse(props?.data[1]?.Created)}{" "}
                </span>
                <h1>{props.done === false ? "" : props.data[1]?.Title}</h1>
              </div>
            </Link>
          </div>
          <div className="carousel-item">
            <Link to={`/news/${props.done === false ? "" : props.data[2]?.ID}`}>
              <div style={{backgroundImage:props?.done === false  ? '../../assets/no-image.png':`url(${props?.data[2].Foto})`}}className="carousel-image"></div>
              <div className="carousel-text">
                <span>
                  {props.done === false
                    ? ""
                    : date.parse(props?.data[2]?.Created)}{" "}
                </span>
                <h1>{props.done === false ? "" : props.data[2]?.Title}</h1>
              </div>
            </Link>
          </div>
        </Carousel>
      </div>
    </>
  );
}
