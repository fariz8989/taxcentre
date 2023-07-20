import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
export default function Activity() {
  const [pic,setPic] = useState(null)
  useEffect(()=>{
    const fetchActivity = async ()=>{
      let result = await axios.get("https://ui.taxcentre.id/api/news/list.html?cat_id=4");
      setPic(result.data.results[0].Foto) 
      console.log(result.data.results[0].Foto)
    }
    fetchActivity()
  },[])
  const slider = useRef();
  return (
    <>
      <div id="activity">
        <h1>Gallery Activity</h1>
        <div className="activity-container">
          <div ref={slider} className="activity-slider">
            <div className="activity-item">
              <img src={require("../../assets/aphi.jpeg")} />
              <div>
                <h3>Kegiatan FGD Asosiasi Pengusaha Hutan Indonesia {"(APHI)"} </h3>
              </div>
            </div>
            <div className="activity-item">
              <img src={pic === null ? "":pic} /> 
             
              <div>
                <h3>KEGIATAN PELATIHAN BREVET A/B</h3>
              </div>
            </div>
            <div className="activity-item">
              <img src={require("../../assets/aphi.jpeg")} />
              <div>
                <h3>KEGIATAN PELATIHAN BREVET A/B</h3>
              </div>
            </div>
            <div className="activity-item">
              <img src={require("../../assets/brevetA.webp")} />
              <div>
                <h3>KEGIATAN PELATIHAN BREVET A/B</h3>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => (slider.current.scrollLeft -= 300)}
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </button>
        <button
          onClick={() => (slider.current.scrollLeft += 300)}
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </button>
      </div>
    </>
  );
}
