import React, { useEffect, useState } from "react";
import { icon } from "../../assets/Icon";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { date } from "../../helper/dateParser";
export default function NewsDisplay() {
  const [news, setNews] = useState({ data: null, done: false, error: false });
  const { id } = useParams();
  /* Parse HTML To String */
  const domParser = () => {
    const parser = new DOMParser();
    const parsed = parser.parseFromString(news.data?.Isi, "text/html").body
      .children;
    const result = [];
    for (let i = 0; i < parsed.length; i++) {
      result.push(parsed[i].innerHTML);
    }
    return result;
  };
  //Loading and Content
  const content = ()=>{
    if(news.done === false)
    return <h1 id="Loading">Loading</h1>
    return <>
    <div className="news-wrapper">
          <div>
            <img src={news.data?.Foto ? news.data?.Foto:""} />
          </div>
          <div className="news-display-text">
            <h1>{news.data === null ? "" : news.data?.Title}</h1>
            <div className="news-information">
            <span>{news.data === null ? "" : date.parse(news?.data?.Created)} </span>
              <div>
                {icon.tags}
                <span>Pajak</span>
              </div>
            </div>
            <span>Penulis : Ahmad Fariz</span>

            {/* News Content */}
            <div className="news-content">
              {news.data === null
                ? ""
                : domParser().map((data) => {
                    return <p>{data}</p>;
                  })}
            </div>
            {/* END NEWS CONTENT */}
          </div>
          {/* Share */}
          <div className="share-container">
            <span>Share News :</span>
            <div>
            <a href={`https://api.whatsapp.com/send?text=${window.location.href}`}>
              {icon.facebook}
              </a>
              <a href={`https://api.whatsapp.com/send?text=${window.location.href}`}>
              {icon.whatsapp}
              </a>
              <a href={`https://api.whatsapp.com/send?text=${window.location.href}`}>
              {icon.linkedin}
              </a>
            </div>
          </div>
          {/* END SHARE */}
        </div>
    </>
  }
  useEffect(() => {
    axios
      .get("https://ui.taxcentre.id/api/news/list.html?cat_id=1")
      .then((res) => {
        res.data.results.forEach((data) => {
          if(data.ID === id)
          setNews({ data: data, done: true, error: false });
        });
        console.log(news)
        
      })
      .catch((err) => {
        setNews({ ...news, done: true, error: true });
      });
  }, []);
  return (
    <>
      <div id="news-display">
        {content()}
      </div>
    </>
  );
}
