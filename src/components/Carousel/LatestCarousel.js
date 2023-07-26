import React from "react";
import { Link } from "react-router-dom";
import { date } from "../../helper/dateParser";
export default function LatestCarousel({ props }) {
  // Extract YYYY/MM/DD From News Data
  const displayedNews = props.data
    ?.sort((a, b) => {
      return date.extract(a.Created) - date.extract(b.Created);
    })
    .slice(0, 3);

  return (
    <>
      <div className="w-full">
          <div className="carousel-grid">
            {displayedNews?.map((data) => {
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
    </>
  );
}
