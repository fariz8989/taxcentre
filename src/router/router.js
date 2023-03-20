import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, AboutPage, TrainingPage, NewsPage,PublicationPage } from "../controller/pageController";
import TrainingComponent from '../components/Training/Training'
import RegisterForm from "../components/From/RegisterForm";
import NewsDisplay from "../components/News/NewsDisplay";
export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/news" element={<NewsPage/>} />
        <Route path="/news/:title" element={<NewsDisplay/>}/>
        <Route path="/training/brevetab" element={ <TrainingComponent/> }/>
        <Route path="/training/register" element={<RegisterForm/>}/>
        <Route path="/publication" element={<PublicationPage/>} />

      </Routes>
    </>
  );
}
