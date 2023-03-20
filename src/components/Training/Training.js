import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
export default function TrainingComponent(props) {
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
            <h1>Brevet A/B</h1>
            <div>
              <h3>Tujuan Pelatihan</h3>
              <ol>
                <li>
                  Lulusan diharapkan dapat mengikuti ujian Sertifikasi Konsultan
                  Pajak Indonesia (SKPI) yang diselenggarakan oleh Otoritas
                  Sertifikasi.
                </li>
                <li>
                  Lulusan dapat melaksanakan kewajiban-kewajiban dan hak-hak
                  perpajakan sebagai Wajib Pajak dengan baik sesuai dengan
                  ketentuan yang berlaku dalam praktik sehari-hari.
                </li>
                <li>
                  Peserta mendapatkan perkembangan terkini (update) peraturan
                  perpajakan.
                </li>
              </ol>
            </div>
            <div>
              <h3>Metode Pelatihan</h3>
              <span>
                Pelatihan diberikan dalam bentuk tatap muka, diskusi dan
                pemecahan kasus (case study) dan latihan praktek secara intensif
                dan mendalam atau Pelatihan daring melalui system platform yang
                meungkinkan peserta mengikuti pelatihan jarak jauh dengan metode
                diskusi interaktif.
              </span>
            </div>
            <div>
              <h3>Periode Pelaksanaan</h3>
              <span>
                Pendaftaran : Agustus 2022 - April 2023 <br />
                Pelatihan : Februari 2023 - Agustus 2023
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
                  <li>Ketentuan Umum dan Tatacara Perpajakan (KUT) A</li>
                  <li>Pemotongan dan Pemungutan Pajak Penghasilan</li>
                  <li>Pajak Penghasilan Badan</li>
                  <li>Pajak Penghasilan Orang Pribadi</li>
                  <li>Pajak Pertambahan Nilai A</li>
                  <li>Pelaporan Pajak Elektronik (E-SPT)</li>
                </ol>
              </div>
            </div>
            <Link to={"/training/register?training=0"}>
            <Button props={{ type: "primary", text: "Daftar" }} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
