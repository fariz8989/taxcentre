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
            <Link to={`/news/${props.done === false ? "" : props.data[0].ID}`}>
              <div className="carousel-image carousel-1"></div>
              <div className="carousel-text">
                <span>
                  {props.done === false
                    ? ""
                    : date.parse(props?.data[0].Created)}{" "}
                </span>
                <h1>{props.done === false ? "" : props.data[0].Title}</h1>
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
