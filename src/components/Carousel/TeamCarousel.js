import React from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
export default function TeamCarousel() {
  return (
    <>
      <div id="carousel-team" className="">
        <Carousel
          arrows={true}
          prevArrow={<LeftOutlined />}
          nextArrow={<RightOutlined />}
          autoplay={false}
        >
          <div className="carousel-item">
            <div className="team-image"></div>
            <div className="team-name">
              <div>
                <h2>Prof. Dr. Gunadi, M.Sc, Akt</h2>
                <span>Akademisi</span>
              </div>
            </div>
          </div>
          <div className="carousel-item"></div>
          <div className="carousel-item"></div>
        </Carousel>
      </div>
    </>
  );
}
