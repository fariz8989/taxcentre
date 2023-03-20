import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { icon } from "../../assets/Icon";
export default function Navbar() {
  const toggleMenu = () => {
    document.getElementById("main-nav").classList.toggle("open");
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
            <img src={require('../../assets/Logo.webp')}/>
          </div>
          </Link>
          <nav className="nav-link">
            <Link to={"/"} class="material-symbols-outlined nav-item">HOME</Link>
            <Link to={"/training"} class="material-symbols-outlined nav-item dropdown">
              TRAINING
              <div id="submenu">
                <Link to={'/training/brevetab'}>
                <div className="submenu-item"><span>Brevet A/B</span></div>
                </Link>
                <div className="submenu-item"><span>Brevet C</span></div>
                <div className="submenu-item"><span>Sertifikasi PPJK</span></div>
              </div>
            </Link>
            <Link to={"/about-us"} class="material-symbols-outlined nav-item">
              CONSULTING
            </Link>
            <Link to={"/publication"} class="material-symbols-outlined nav-item">
                PUBLICATION
            </Link>
            <Link to={"/news"} class="material-symbols-outlined nav-item">
                NEWS
            </Link>
            <Link to={"/about-us"} class="material-symbols-outlined nav-item">
              ABOUT US
            </Link>
            <Link to={"/about-us"} class="material-symbols-outlined nav-item">
              LOGIN
            </Link>
          </nav>
        </nav>
      </nav>
    </>
  );
}
