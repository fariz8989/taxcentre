import React, { useEffect, useRef } from "react";
import ServiceCarousel from "../components/Carousel/ServiceCarousel";
import axios from "axios";
import X2JS from "x2js";
import Partner from "../components/Partner/Partner";
import LatestCarousel from "../components/Carousel/LatestCarousel";
import Kurs from "../components/Kurs/Kurs";
import TeamCarousel from "../components/Carousel/TeamCarousel";
import NewsCarousel from "../components/Carousel/NewsCarousel";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
import Activity from "../components/Activity/Activity";
import Survey from "../components/Survey/Survey";
import Publication from "../components/Publication/Publication";
function HomePage() {
  return (
    <>
      <ServiceCarousel />
      <Partner />
      <div id="latest-news-carousel" className="">
        <h1 className="news-header">Latest News</h1>
        <LatestCarousel />
      </div>
      <Survey/>
      <Activity />
    </>
  );
}
function AboutPage() {
  return (
    <>
      <div id="profile">
        <div className="profile-container">
          <h1>Tax Centre FIA UI</h1>
          <p>
            Tax Centre Fakultas Ilmu Administrasi Universitas Indonesia (Tax
            Centre FIA UI) adalah lembaga pendidikan, pelatihan dan kajian
            independen yang mendukung kegiatan akademik dengan fokus utamanya
            pada penelitian/kajian akademik dan pengabdian masyarakat di bidang
            perpajakan (baik jenis pajak pusat dan daerah), kepabeanan dan
            cukai.
          </p>
        </div>
      </div>
      <div id="team">
        <div className="team-container team-pic">
          <TeamCarousel />
        </div>
        <div className="team-container">
          <h1>Meet Our Expert</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            suscipit, justo vel sodales iaculis, dolor orci tristique dui, at
            vehicula mauris orci nec orci. Morbi efficitur velit mauris, quis
            gravida lacus dignissim nec. Ut pulvinar ante quis aliquet
            tincidunt. Aenean eleifend malesuada lorem eu molestie. Aenean quis
            suscipit diam. Proin interdum, orci sit amet suscipit mollis, lectus
            sapien fringilla dui, ac suscipit eros est eu ante. Donec nunc mi,
            commodo in erat a, semper vestibulum est.
          </p>
        </div>
      </div>
      <div id="vision-mission">
        <div className=" justify-start">
          <div className="vision">
            <h1>Our Vision</h1>
            <p>
            Mengembangkan keahlian di bidang perpajakan untuk membantupembuat kebijakan meningkatkan kesadaran perpajakan masyarakat, berkat visi yang jelas, nilai-nilai yang terjaga dan tenaga ahli kami.
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="mission">
            <h1>Our Mission</h1>
            <ol>
              <li>Meningkatkan penelitian untuk mengembangkan ilmu pengetahuan dalam menghadapi perubahan masyarakat secara global dengan tujuan dapat menjadi sarana pemecahan masalah dan peningkatan kualitas pengetahuan bagi bangsa Indonesia, serta manusia pada umumnya, sebagai bentuk dari perwujudan ilmu pengetahuan dan profesi perpajakan </li>
              <li>Membuat Strategy Management yang andal untuk mempercepat dan tepat dalam pencapaian visi dimasing-masing lini dan ditingkat pusat </li>
              <li>Membangun market leader untuk membantu pencapaian peningkatan penelitian dan strategy management dengan cepat</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
function TrainingPage() {
  return (
    <>
      <div id="training">
        <div className="training-item">
          <Link to={"/training/brevetab"}>
            <div className="training-image brevet-a"></div>
            <div className="training-text">
              <h2>Brevet A/B</h2>
            </div>
          </Link>
        </div>

        <div className="training-item">
          <div className="training-image brevet-c"></div>
          <div className="training-text">
            <h2>Brevet C</h2>
          </div>
        </div>
        <div className="training-item">
          <div className="training-image ppjk"></div>
          <div className="training-text">
            <h2>PPJK</h2>
          </div>
        </div>
      </div>
    </>
  );
}
function NewsPage() {
  return (
    <>
      <div id="news">
        <div className="news-section-one">
          <div className="news-wrapper">
            <NewsCarousel />
          </div>
          <div className="popular-news-wrapper">
            <h1>TERPOPULER</h1>
            {/* 1 */}
            <div className="popular-news-container">
              <span>1</span>
              <div>
                <span className="popular-news-title">Pajak Karbon</span>
                <h3>Penerapan pajak karbon pada PLTU A</h3>
              </div>
            </div>
            {/* 2 */}
            <div className="popular-news-container">
              <span>2</span>
              <div>
                <span className="popular-news-title">Pajak Karbon</span>
                <h3>Penerapan pajak karbon pada PLTU A</h3>
              </div>
            </div>
            {/* 3 */}
            <div className="popular-news-container">
              <span>3</span>
              <div>
                <span className="popular-news-title">Pajak Karbon</span>
                <h3>Penerapan pajak karbon pada PLTU A</h3>
              </div>
            </div>
            {/* 4 */}
            <div className="popular-news-container">
              <span>4</span>
              <div>
                <span className="popular-news-title">Pajak Karbon</span>
                <h3>Penerapan pajak karbon pada PLTU A</h3>
              </div>
            </div>
            {/* 5 */}
            <div className="popular-news-container">
              <span>5</span>
              <div>
                <span className="popular-news-title">Pajak Karbon</span>
                <h3>Penerapan pajak karbon pada PLTU A</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="news-section-two">
          <div className="flex justify-between">
            <h1 className="news-header">Latest Articles</h1>
            <Button props={{ type: "secondary", text: "View More" }} />
          </div>

          <LatestCarousel />
        </div>
      </div>
    </>
  );
}
function PublicationPage() {
  return (
    <>
     <Publication/>
    </>
  );
}
export { HomePage, AboutPage, TrainingPage, NewsPage, PublicationPage };
