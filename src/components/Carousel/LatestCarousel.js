import React from "react";
import { Link } from "react-router-dom";
import { date } from "../../helper/dateParser";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
export default function LatestCarousel({ props }) {
  // Extract YYYY/MM/DD From News Data
  const displayedNews = props.data?.sort((a, b) => {
    return date.extract(a.Created) - date.extract(b.Created);
  });

  return (
    <>
      {props.done ? <div className="w-full bg-gray-800">
        <Carousel
          arrows={true}
          prevArrow={<LeftOutlined />}
          nextArrow={<RightOutlined />}
          autoplay={false}
          autoplaySpeed={3000}
        >
          <div className="carousel-item">
            <div className="carousel-grid">
              {displayedNews?.slice(0, 3).map((data) => {
                return (
                  <Link to={`/news/${data.ID}`}>
                    <div className="grid-item h-full hover:bg-gray-300 hover:-translate-y-3 transition ease-out duration-500 rounded bg-gray-200 border-gray-300 shadow-md overflow-hidden my-2 pb-4">
                      <img
                        className="latest-news-image"
                        src={data.Foto ? data.Foto : ""}
                        alt=""
                      />
                      <div className="news-text">
                        <span>{date.parse(data.Created)} </span>
                        <h1 className="">{data.Title} </h1>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-grid">
              {displayedNews?.slice(3,6).map((data) => {
                return (
                  <Link to={`/news/${data.ID}`}>
                    <div className="grid-item h-full hover:bg-gray-300 hover:-translate-y-3 transition ease-out duration-500 rounded bg-gray-200 border-gray-300 shadow-md overflow-hidden my-2 pb-4">
                      <img
                        className="latest-news-image"
                        src={data.Foto ? data.Foto : ""}
                        alt=""
                      />
                      <div className="news-text">
                        <span>{date.parse(data.Created)} </span>
                        <h1 className="">{data.Title} </h1>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-grid">
              {displayedNews?.slice(6,9).map((data) => {
                return (
                  <Link to={`/news/${data.ID}`}>
                    <div className="grid-item h-full hover:bg-gray-300 hover:-translate-y-3 transition ease-out duration-500 rounded bg-gray-200 border-gray-300 shadow-md overflow-hidden my-2 pb-4">
                      <img
                        className="latest-news-image"
                        src={data.Foto ? data.Foto : ""}
                        alt=""
                      />
                      <div className="news-text">
                        <span>{date.parse(data.Created)} </span>
                        <h1 className="">{data.Title} </h1>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </Carousel>
      </div>:<h1 id="Loading">Loading</h1>}
      {/*  <div className="w-full">
     
        </div> */}
    </>
  );
}
