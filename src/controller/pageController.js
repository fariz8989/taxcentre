import React, { useEffect, useRef, useState } from "react";
import ServiceCarousel from "../components/Carousel/ServiceCarousel";
import axios from "axios";
import Partner from "../components/Partner/Partner";
import LatestCarousel from "../components/Carousel/LatestCarousel";
import { date } from "../helper/dateParser";
import TeamCarousel from "../components/Carousel/TeamCarousel";
import NewsCarousel from "../components/Carousel/NewsCarousel";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
import Activity from "../components/Activity/Activity";
import Survey from "../components/Survey/Survey";
import Publication from "../components/Publication/Publication";
// Import Function Untuk Decrypt dan Encrypt
import { decrypt, encrypt } from "../helper/encryption";
import { icon } from "../assets/Icon";
function HomePage() {
  // Fetching News Data
  const [newsData, setNewsData] = useState({
    data: [],
    done: false,
    error: false,
  });
  const displayedNews = newsData?.data.sort((a, b) => {
    return date.extract(a.Created) - date.extract(b.Created);
  });
  useEffect(() => {
    //News DAta Request
    axios
      .get("https://ui.taxcentre.id/api/news/list.html?cat_id=1")
      .then((res) => {
        setNewsData({ data: res.data.results, done: true, error: false });
      })
      .catch((err) => {
        setNewsData({ ...newsData, done: true, error: true });
      });
  }, []);
  //Fetching Kurs
  useEffect(() => {
    axios
      .get("https://alpha.brokr.id/v1/master/kurs", {
        headers: { userKey: "wjt", passKey: "Pass1234" },
      })
      .then((res) => {
        console.log(res);
      });
  }, []);
  let encrypted = encrypt("1");
  let decrypted = decrypt(encrypted);
  console.log({
    CryptoJS: {
      base: encrypted,
      result: decrypted,
    },
  });
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get("https://ui.taxcentre.id/api/calender/list.html").then((res) => {
      setData(res?.data.results);
      console.log(res);
    });
  }, []);

  return (
    <>
      <ServiceCarousel />
      <Partner />
      <div id="latest-news-carousel" className="">
        <h1 className="news-header">Latest News</h1>
        <div className="news-homepage">
          {/* 1  */}
          <Link
            to={`/news/${newsData.done === false ? "" : displayedNews[0].ID}`}
          >
            <div className="grid-item h-full hover:bg-gray-300 hover:-translate-y-3 transition ease-out duration-500 rounded bg-gray-200 border-gray-300 shadow-md overflow-hidden my-2 pb-4">
              <img
                className=" h-1/2 w-full object-cover "
                src={require("../assets/training.webp")}
                alt=""
              />
              <div className="news-text">
                <span>
                  {" "}
                  {newsData.done === false
                    ? ""
                    : date.parse(displayedNews[0].Created)}
                </span>
                <h1 className="">
                  {" "}
                  {newsData.done === false ? "" : displayedNews[0].Title}
                </h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Survey />
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
            Tax Centre UI memiliki tim ahli yang diisi oleh para Guru Besar,
            Dosen dan Praktisi yang memiliki ilmu pengetahuan di bidang
            perpajakan, kepabeanan dan cukai, serta mempunyai pengalaman praktis
            professional yang selalu update dengan kebijakan perpajakan terbaru.
          </p>
        </div>
      </div>
      <div id="vision-mission">
        <div className=" justify-start">
          <div className="vision">
            <h1>Our Vision</h1>
            <p>
              Mengembangkan keahlian di bidang perpajakan untuk membantupembuat
              kebijakan meningkatkan kesadaran perpajakan masyarakat, berkat
              visi yang jelas, nilai-nilai yang terjaga dan tenaga ahli kami.
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="mission">
            <h1>Our Mission</h1>
            <ol>
              <li>
                Meningkatkan penelitian untuk mengembangkan ilmu pengetahuan
                dalam menghadapi perubahan masyarakat secara global dengan
                tujuan dapat menjadi sarana pemecahan masalah dan peningkatan
                kualitas pengetahuan bagi bangsa Indonesia, serta manusia pada
                umumnya, sebagai bentuk dari perwujudan ilmu pengetahuan dan
                profesi perpajakan{" "}
              </li>
              <br />
              <li>
                Membuat Strategy Management yang andal untuk mempercepat dan
                tepat dalam pencapaian visi dimasing-masing lini dan ditingkat
                pusat{" "}
              </li>
              <br />
              <li>
                Membangun market leader untuk membantu pencapaian peningkatan
                penelitian dan strategy management dengan cepat
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
function TrainingPage() {
  const [data, setData] = useState({ data: null, done: false });
  const content = () => {
    if (data.done == false) return <h1 id="Loading">Loading</h1>;
    return data.data?.map((data) => {
      return (
        <>
          {/* CARD START */}
          <div className="seminar-card">
            <img
              className="seminar-image"
              src={require("../assets/brevetA.webp")}
            />
            <div className="seminar-text">
              <h3>{data.Judul}</h3>
              <div className="seminar-info">
                <div>
                  {icon.clock}
                  <span>{date.parse(data.Date)}</span>
                </div>
                <div>
                  {icon.tags}
                  <span>Pajak</span>
                </div>
              </div>
            </div>
          </div>
          {/* CARD END */}
        </>
      );
    });
  };
  useEffect(() => {
    axios
      .get("https://ui.taxcentre.id/api/calender/list.html?type_id=2")
      .then((res) => {
        const sorted = [];
        res.data.results.map((data) => {
          //Filter Seminar and Workshop
          if (data?.TypeID === "2" || data?.TypeID === "3") {
            sorted.push(data);
          }
        });
        setData({ data: sorted, done: true });
      });
  }, []);
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
          <Link to={"/training/brevetc"}>
            <div className="training-image brevet-c"></div>
            <div className="training-text">
              <h2>Brevet C</h2>
            </div>
          </Link>
        </div>
        <div className="training-item">
          <div className="training-image ppjk"></div>
          <div className="training-text">
            <h2>PPJK</h2>
          </div>
        </div>
      </div>
      <div id="seminar">
        <h1>Webinar & Seminar</h1>
        <div className="seminar-container">
          {console.log(data)}
          {content()}
        </div>
      </div>
    </>
  );
}
function NewsPage() {
  const [newsData, setNewsData] = useState({
    data: null,
    done: false,
    error: false,
  });
  useEffect(() => {
    //News DAta Request
    axios
      .get("https://ui.taxcentre.id/api/news/list.html?cat_id=1")
      .then((res) => {
        setNewsData({ data: res.data.results, done: true, error: false });
      })
      .catch((err) => {
        setNewsData({ ...newsData, done: true, error: true });
      });
  }, []);
  return (
    <>
      <div id="news">
        <div className="news-section-one">
          <div className="news-wrapper">
            <NewsCarousel props={newsData} />
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
            <Link to={"/news/catalog"}>
              <Button props={{ type: "secondary", text: "View More" }} />
            </Link>
          </div>

          <LatestCarousel props={newsData} />
        </div>
      </div>
    </>
  );
}
function PublicationPage() {
  return (
    <>
      <Publication />
    </>
  );
}
function ServicesPage() {
  const [isOpen, setOpenStatus] = useState({
    research: false,
    training: false,
    tax: false,
    IT: false,
  });
  return (
    <>
      <section id="services">
        <div className="services-type-container">
          {/* Services Item */}
          <div className="services-type">
            {icon.research}
            <div className="services-type-text">
              <div>
                <h3>Research</h3>
                <span>
                Performing research in taxation and economics topic with our experienced expert both academic and practition for scientific and technical porpuses
                </span>
              </div>
              <button
                onClick={() => {
                  setOpenStatus({
                    ...isOpen,
                    research: !isOpen.research,
                  });
                }}
              >
                <svg
                className={`${isOpen.research ? "open" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </button>
              <div
                className={`services-dropdown ${isOpen.research ? "open" : ""}`}
              >
                <span>
                Our research covers wide taxation and economics topic such as, VAT, Income and International Taxation, Environmental Tax, Macro Economy and Financial Sector and etc.
                </span>
              </div>
            </div>
          </div>

          <div className="services-type">
            {icon.training}
            <div className="services-type-text">
              <div>
                <h3>Training, Workshop and Seminar</h3>
                <span>
                The FIA UI Tax Center carries out certification training programs, seminars and workshops in the field of taxation with professional instructors from both academics and practitioners
                </span>
              </div>
              <button
                onClick={() => {
                  setOpenStatus({
                    ...isOpen,
                    training: !isOpen.training,
                  });
                }}
              >
                <svg
                className={`${isOpen.training ? "open" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </button>
              <div
                className={`services-dropdown ${isOpen.training ? "open" : ""}`}
              >
                <span>
                Our routine training covers Brevet A/B, Brevet C and PPJK 
                </span>
              </div>
            </div>
          </div>
          <div className="services-type">
            {icon.legal}
            <div className="services-type-text">
              <div>
                <h3>Tax and Legal Advisory and Consultant</h3>
                <span>
                Performing research in taxation and economics topic with our experienced expert both academic and practition for scientific and technical porpuses
                </span>
              </div>
              <button
                onClick={() => {
                  setOpenStatus({
                    ...isOpen,
                    research: !isOpen.research,
                  });
                }}
              >
                <svg
                className={`${isOpen.research ? "open" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </button>
              <div
                className={`services-dropdown ${isOpen.research ? "open" : ""}`}
              >
                <span>
                Our research covers wide taxation and economics topic such as, VAT, Income and International Taxation, Environmental Tax, Macro Economy and Financial Sector and etc.
                </span>
              </div>
            </div>
          </div>
          <div className="services-type">
            {icon.research}
            <div className="services-type-text">
              <div>
                <h3>Research</h3>
                <span>
                Performing research in taxation and economics topic with our experienced expert both academic and practition for scientific and technical porpuses
                </span>
              </div>
              <button
                onClick={() => {
                  setOpenStatus({
                    ...isOpen,
                    research: !isOpen.research,
                  });
                }}
              >
                <svg
                className={`${isOpen.research ? "open" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </button>
              <div
                className={`services-dropdown ${isOpen.research ? "open" : ""}`}
              >
                <span>
                Our research covers wide taxation and economics topic such as, VAT, Income and International Taxation, Environmental Tax, Macro Economy and Financial Sector and etc.
                </span>
              </div>
            </div>
          </div>
          {/* Services Item Ends */}
        </div>
      </section>
    </>
  );
}
export {
  HomePage,
  AboutPage,
  TrainingPage,
  NewsPage,
  PublicationPage,
  ServicesPage,
};
