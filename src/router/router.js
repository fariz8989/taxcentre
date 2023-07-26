import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  AboutPage,
  TrainingPage,
  NewsPage,
  PublicationPage,
  ServicesPage,
} from "../controller/pageController";
import TrainingComponent from "../components/Training/Training";
import TrainingForm from "../components/Form/TrainingForm";
import NewsDisplay from "../components/News/NewsDisplay";
import LoginForm from "../components/Form/LoginForm";
import RegisterFinish from "../components/Form/FormFinish";
import NewsCatalog from "../components/News/NewsCatalog";
import PublicationDisplay from "../components/Publication/PublicationDisplay";
export default function Router() {
  return (
    <>
      <Routes basename="/frontend">
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/catalog" element={<NewsCatalog />} />
        
        <Route path="/news/:id" element={<NewsDisplay />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/training/brevetab"
          element={
            <TrainingComponent
              props={{
                judul: "Brevet A/B",
                tujuan: [
                  "Lulusan diharapkan dapat mengikuti ujian Sertifikasi Konsultan Pajak Indonesia (SKPI) yang diselenggarakan oleh Otoritas Sertifikasi",
                  "Lulusan dapat melaksanakan kewajiban-kewajiban dan hak-hak perpajakan sebagai Wajib Pajak dengan baik sesuai dengan ketentuan yang berlaku dalam praktik sehari-hari.",
                  " Peserta mendapatkan perkembangan terkini (update) peraturan perpajakan.",
                ],
                metode:
                  "Pelatihan diberikan dalam bentuk tatap muka, diskusi dan pemecahan kasus (case study) dan latihan praktek secara intensif dan mendalam atau Pelatihan daring melalui system platform yang memungkinkan peserta mengikuti pelatihan jarak jauh dengan metode diskusi interaktif.",
                materi:["Ketentuan Umum dan Tatacara Perpajakan (KUT) A", "Pemotongan dan Pemungutan Pajak Penghasilan","Pajak Penghasilan Badan","Pajak Penghasilan Orang Pribadi","Pajak Pertambahan Nilai A","Pelaporan Pajak Elektronik (E-SPT)"],
                type:"21017875"
              }}
            />
          }
        />
        <Route path="/training/brevetc" element={ <TrainingComponent
              props={{
                judul: "Brevet C",
                tujuan: [
                  "Lulusan diharapkan dapat mengikuti ujian Sertifikasi Konsultan Pajak Indonesia (SKPI) yang diselenggarakan oleh otoritas sertifikasi.",
                  "Lulusan dapat melaksanakan kewajiban-kewajiban dan hak-hak perpajakan sebagai Wajib Pajak dengan baik sesuai dengan ketentuan yang berlaku dalam praktik sehari-hari.",
                  " Peserta mendapatkan perkembangan terkini (update) peraturan perpajakan.",
                ],
                metode:
                  "Pelatihan diberikan dalam bentuk tatap muka, diskusi dan pemecahan kasus (case study) dan latihan praktek secara intensif dan mendalam atau Pelatihan daring melalui system platform yang memungkinkan peserta mengikuti pelatihan jarak jauh dengan metode diskusi interaktif.",
                materi:["Kebijakan Umum Perpajakan", "Perpajakan Internasional","Transfer Pricing","Pajak Penghasilan Badan C","Pajak Pertambahan Nilai A","Akuntansi Perpajakan C","Perencanaan Perpajakan", "Pemotongan dan Pemungutan Pajak Penghasilan C"],
                type:"21017893"
              }}
            />} />
            <Route path="/training/ppjk" element={ <TrainingComponent
              props={{
                judul: "PPJK",
                tujuan: [
                  "Peserta langsung dapat mengikuti ujian Sertifikasi Ahli Kepabeaan yang diselenggarakan oleh Otoritas Sertifikasi.",
                  "Lulusan dapat melaksanakan kewajiban-kewajiban dan hak-hak serta dapat melakukan pengurusan jasa kepabeanan dengan baik sesuai dengan ketentuan kepabeanan yang berlaku."
                ],
                metode:
                  "Pelatihan diberikan dalam bentuk tatap muka, diskusi dan pemecahan kasus (case study) dan latihan praktek secara intensif dan mendalam atau Pelatihan daring melalui system platform yang memungkinkan peserta mengikuti pelatihan jarak jauh dengan metode diskusi interaktif.",
                materi:["Pengetahuan UU Kepabeanan", "Prosedur Impor","Prosedur Ekspor","Klasifikasi barang menurut BTKI","Sistem nilai pabean","Fasilitas kepabeanan I","Fasilitas kepabeanan II", "Administrasi perbendaharaan pabean"],
                type:"21017893"
              }}
            />} />
            <Route path="/services" element={<ServicesPage/>} />
        <Route path="/training/register" element={<TrainingForm />} />
        <Route path="/training/register/finish" element={<RegisterFinish />} />
        <Route path="/publication" element={<PublicationPage />} />
        <Route path="/publication/:id" element={<PublicationDisplay/>} />
        
      </Routes>
    </>
  );
}
