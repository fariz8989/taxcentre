import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
export default function TrainingComponent({props}) {
  const toggle = useRef();
  const buttonToggle = useRef();
  const [dropdown, setDropdown] = useState(false);
  useEffect(() => {
    toggle.current.classList.toggle("open");
    buttonToggle.current.classList.toggle("button-open");
  }, [dropdown]);

  return (
    <>
      <div id="training-display" className="">
        <div className="content-wrapper">
          <img src={require("../../assets/brevetA.webp")} />
          <div className="content-text">
            <h1>{props.judul}</h1>
            <div>
              <h3>Tujuan Pelatihan</h3>
              <ol>
              {props.tujuan.map(data => {
                return <li>{data}</li>
              })}
              
                
              </ol>
            </div>
            <div>
              <h3>Metode Pelatihan</h3>
              <span>
                {props.metode}
              </span>
            </div>
           
            {/* Dropdown */}
            <div className="materi">
              <div className="materi-title">
                <h3>Materi Pembelajaran</h3>
                <button
                  ref={buttonToggle}
                  onClick={(e) => {
                    e.preventDefault();
                    setDropdown(!dropdown);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="dropdown-arrow-open"
                    viewBox="0 0 512 512"
                  >
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                  </svg>
                </button>
              </div>
              {/* Dropdown Item */}
              <div ref={toggle} className="materi-dropdown">
                <ol>
                  {props?.materi.map(data=>{
                    return <li>{data}</li>
                  })}
                  
                </ol>
              </div>
            </div>
            <Link to={`/training/register`}>
            <Button props={{ type: "primary", text: "Daftar" }} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
