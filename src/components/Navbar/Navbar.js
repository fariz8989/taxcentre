import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { icon } from "../../assets/Icon";
export default function Navbar() {
  const toggleMenu = () => {
    document.getElementsByClassName("nav-link")[0].classList.toggle("open");
  };
  return (
    <>
      <nav id="main-nav" className="">
        <button onClick={toggleMenu} class="burger material-symbols-outlined">
          <div className="w-6 fill-gray-500">{icon.burger}</div>
        </button>
        <nav class="navbar">
          <Link to={"/"}>
            <div class="logo">
              <img src={require("../../assets/Logo.webp")} />
            </div>
          </Link>
          <nav className="nav-link">
            <Link onClick={() => {
              document
                .getElementsByClassName("nav-link")[0]
                .classList.remove("open");
            }} 
            to={"/"} class="material-symbols-outlined nav-item">
              HOME
            </Link>
            <Link
             onClick={() => {
              document
                .getElementsByClassName("nav-link")[0]
                .classList.remove("open");
            }}
              to={"/training"}
              class="material-symbols-outlined nav-item dropdown"
            >
              TRAINING
              <div id="submenu">
                <Link
                 onClick={() => {
                  document
                    .getElementsByClassName("nav-link")[0]
                    .classList.remove("open");
                }}
                  to={"/training/brevetab"}
                >
                  <div className="submenu-item">
                    <span>Brevet A/B</span>
                  </div>
                </Link>
                <Link onClick={() => {
              document
                .getElementsByClassName("nav-link")[0]
                .classList.remove("open");
            }} to={"/training/brevetc"}>
                  <div className="submenu-item">
                    <span>Brevet C</span>
                  </div>
                </Link>
                <div className="submenu-item">
                  <span>Sertifikasi PPJK</span>
                </div>
              </div>
            </Link>
            <Link onClick={() => {
              document
                .getElementsByClassName("nav-link")[0]
                .classList.remove("open");
            }} to={"/services"} class="material-symbols-outlined nav-item">
              SERVICES
            </Link>
            <Link
            onClick={() => {
              document
                .getElementsByClassName("nav-link")[0]
                .classList.remove("open");
            }}
              to={"/publication"}
              class="material-symbols-outlined nav-item"
            >
              PUBLICATION
            </Link>
            <Link 
            onClick={() => {
              document
                .getElementsByClassName("nav-link")[0]
                .classList.remove("open");
            }}to={"/news"} class="material-symbols-outlined nav-item">
              NEWS
            </Link>
            <Link 
            onClick={() => {
              document
                .getElementsByClassName("nav-link")[0]
                .classList.remove("open");
            }}to={"/about-us"} class="material-symbols-outlined nav-item">
              ABOUT US
            </Link>
          </nav>
        </nav>
      </nav>
    </>
  );
}
