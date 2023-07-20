import React from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { date } from "../../helper/dateParser";
export default function LatestCarousel({props}) {
  // Extract YYYY/MM/DD From News Data
  const displayedNews = props.data?.sort((a,b)=>{return date.extract(a.Created)-date.extract(b.Created)});

  return (
    <>
      <div className="w-full">
        <Carousel
          arrows={true}
          prevArrow={<LeftOutlined />}
          nextArrow={<RightOutlined />}
          autoplay={true}
          autoplaySpeed={5000}
        >
          <div className="carousel-item">
            <div className="carousel-grid">
              {displayedNews?.map(data =>{
                return (
                  <Link to={`/news/${data.ID}`}>
              <div className="grid-item h-full hover:bg-gray-300 hover:-translate-y-3 transition ease-out duration-500 rounded bg-gray-200 border-gray-300 shadow-md overflow-hidden my-2 pb-4">
              <img
                className=" h-1/2 w-full object-cover"
                src={require("../../assets/training.webp")}
                alt=""
              />
              <div className="news-text">
                <span>{date.parse(data.Created)} </span>
                <h1 className="">{data.Title} </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Proin egestas mollis tincidunt. Quisque at nunc sit amet mi
                  sagittis condimentum nec quis velit.
                </p>
              </div>
            </div>
            </Link>
                )
              })}
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}
