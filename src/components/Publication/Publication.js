import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import PaginationComponent from "../Pagination/Pagination";

export default function Publication() {
  
  const [data, setData] = useState({
    data:null,
    done:false
  });
  const [currentPage, setCurrentPage]=useState(1);
  const [postPerPage, setPostPerPage]=useState(8);
  //Current Post
  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const currentPosts = data.data?.slice(firstIndex, lastIndex)
  const content = ()=>{
    if(data.done === false)
    return <h1 id="Loading">Loading</h1>
    return currentPosts?.map((data) => {
      return (
        <>
          <div  key={data.ID}  className="publication-card">
            <img
              className="publication-image"
              src={require("../../assets/brevetA.webp")}
            />
            <div className="publication-text">
              <h3>{data.Title}</h3>
            </div>
            <Link  to={`/publication/${data.ID}`}>
            <Button props={{ type: "primary", text: "Read More" }} />
            </Link>
          </div>
          
        </>
      );
    })
  }
  useEffect(() => {
     axios
      .get("https://ui.taxcentre.id/api/news/list.html?cat_id=2")
      .then((res) => {
        setData({data:res.data.results, done:true});
        console.log(res.data)
      })
      .catch((err) => {}); 
  }, []);
  
  return (
    <>
      <div id="publication">
        <h1>Publication</h1>
        <div className="publication-container">
          {/* CARD */}
          {content()}
          {/* END CARD */}
        </div>
        {data.done ? <PaginationComponent page={currentPage} totalPost={10} postPerPage={5} setCurrentPage={setCurrentPage}  />:""}
      </div>
    </>
  );
}
