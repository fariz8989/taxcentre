import React, { useEffect, useState } from "react";
import { icon } from "../../assets/Icon";
import { useParams } from "react-router-dom";
import axios from "axios";
import { date } from "../../helper/dateParser";
export default function PublicationDisplay() {
  const [news, setNews] = useState({ data: null, done: false, error: false });
  console.log(news)
  const { id } = useParams();
  /* Parse HTML To String */
  const domParser = () => {
    const parser = new DOMParser();
    const parsed = parser.parseFromString(news.data[0]?.Isi, "text/html").body
      .children;
    const result = [];
    for (let i = 0; i < parsed.length; i++) {
      result.push(parsed[i].innerHTML);
    }
    return result;
  };
  useEffect(() => {
    axios
      .get("https://ui.taxcentre.id/api/news/list.html?cat_id=2")
      .then((res) => {
        const filtered = res.data.results.map((data) => {
          if (data.ID === id) return data;
        });
        setNews({ data: filtered, done: true, error: false });
      })
      .catch((err) => {
        setNews({ ...news, done: true, error: true });
      });
  }, []);
  return (
    <>
      <div id="news-display">
        <div className="news-wrapper">
          <div>
            <img src={require("../..//assets/consulting.webp")} />
          </div>
          <div className="news-display-text">
            <h1>{news.data === null ? "" : news.data[0]?.Title}</h1>
            <div className="news-information">
              <span>{news.data === null ? "" :date.parse(news.data[0].Created)} </span>
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
                  }) }
            </div>
            {/* END NEWS CONTENT */}
          </div>
          {/* Share */}
          <div className="share-container">
            <span>Share News :</span>
            <div>
              {icon.facebook}
              {icon.whatsapp}
              {icon.linkedin}
            </div>
          </div>
          {/* END SHARE */}
        </div>
      </div>
    </>
  );
}
