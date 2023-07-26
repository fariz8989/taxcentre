import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import axios from "axios";
import { Link } from "react-router-dom";

export default function NewsCatalog() {
  const [data, setData] = useState({
    data:null,
    done:false
  });
  const content = ()=>{
    if(data.done === false)
    return <h1 id="Loading">Loading</h1>
    return data?.data.map((data) => {
      return (
        <>
          <div className="publication-card">
            <img
              className="publication-image"
              src={data.Foto ? data.Foto : require('../../assets/no-image.png')}
            />
            <div className="publication-text">
              <h3>{data.Title}</h3>
            </div>
            <Link to={`/news/${data.ID}`}>
            <Button props={{ type: "primary", text: "Read More" }} />
            </Link>
          </div>
        </>
      );
    })
  }
  useEffect(() => {
    axios
      .get("https://ui.taxcentre.id/api/news/list.html?cat_id=1")
      .then((res) => {
        setData({data:res.data.results, done:true});
        console.log(res)
      })
      .catch((err) => {});
  }, []);
  
  return (
    <>
      <div id="publication">
        <h1>News</h1>
        <div className="publication-container">
          {/* CARD */}
          {content()}
          {/* END CARD */}
        </div>
      </div>
    </>
  );
}
