import React, { useRef, useEffect, useState } from "react";
import Button from "../Button/Button";
import axios from "axios";
export default function Survey() {
  const [surveyData, setData] = useState([]);
  function getDate(date) {
    var d = new Date(),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  }
  const today = getDate();
  useEffect(() => {
    async function getSurvey(){
      const surveyData = (await axios.get("https://ui.taxcentre.id/backend/api/questionnaire/list.html")).data.results;
      surveyData.forEach(data=>{
        if (data.EndDate > today && data.StatusID === "1")
        setData([...surveyData, data]);
      })
    }
    getSurvey();
  }, []);
  const slider = useRef();
  let style = {
    display: surveyData?.length !== 0 ? "block" : "none",
  };
  return (
    <>
      <div style={style} id="survey">
        <h1>Current Survey</h1>
        <div ref={slider} className="survey-container">
          {surveyData?.map((data) => {
            return (
              <>
                <div className="survey-card">
                  <h3>{data.Title} </h3>
                  <Button props={{ type: "primary", text: "Participate" }} />
                </div>
              </>
            );
          })}
        </div>
        <button
          className="survey-button"
          onClick={() => (slider.current.scrollLeft -= 500)}
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </button>
        <button
          className="survey-button"
          onClick={() => (slider.current.scrollLeft += 500)}
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
