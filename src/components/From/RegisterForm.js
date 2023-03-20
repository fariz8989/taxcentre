import React, { useMemo, useState } from "react";
import { useLocation, useHistory  } from "react-router-dom";
import Select from "react-select";
import Button from "../Button/Button";
export default function RegisterForm() {
  const useQuery = ()=>{
    const {search}=useLocation();
    return useMemo(()=>new URLSearchParams(search),[search])
  }
  const trainingType = useQuery();
  
  const[agreed,setAgreed]=useState(true);

  const training = [
    { value: "brevetAB", label: "Brevet AB" },
    { value: "brevetC", label: "Brevet C" },
    { value: "ppjk", label: "Sertifikasi PPJK" },
  ];
  const trainingPeriod = [
    { value: "Jan - Feb", label: "Jan - Feb" },
    { value: "Feb - Mar", label: "Feb - Mar" },
  ];
  return (
    <>
      <div id="register-form">
        <h1>Registration Form</h1>
        <div className="form-container">
          <div className="form-wrapper">
            <span>Nama Lengkap/Fullname</span>
            <input placeholder="Nama Lengkap/Fullname" type={"text"}></input>
            <span>Email</span>
            <input placeholder="Email" type={"text"}></input>
            <span>Instansi/Institution</span>
            <input placeholder="Email" type={"text"}></input>
          </div>
          <div className="form-wrapper">
            <span>Jenis Pelatihan/Training Type</span>
            <Select
             defaultValue={training[parseInt(trainingType.get("training"))]}
              options={training}
              onChange={(e) => {
                console.log(e);
              }}
            />
            <span>Periode Pelatihan/Training Period</span>
            <Select
              options={trainingPeriod}
              onChange={(e) => {
              
              }}
            />
          </div>
        </div>
        <div className="declaration">
            <h3>Pernyataan/Declaration</h3>
            <ol>
                <li>Saya/kami telah membaca dan memahami semua informasi yang disajikan terkait dengan Tax Centre FIA Universitas Indonesia dan kegiatan yang akan kami ikuti/I/we have read and understand the Tax Centre FIA Universitas Indonesia event will be participated.</li>
                <li>Menyatakan bahwa semua data yang saya/kami sampaikan pada formulir ini adalah valid sesuai dengan fakta yang sebenarnya/Declare that the facts stated in this form are true and correct to the best of my knowledge and that I have not misrepresented any material facts.</li>
                <li>Menyatakan bahwa selama mengikuti kegiatan Training Brevet Konsultan Pajak AB yang akan saya/kami ikuti, saya/kami akan manaati semua peraturan yang ditetapkan oleh Tax Centre FIA Universitas Indonesia/I/we will comply with any rule and regulation governing the event will be held.</li>
            </ol>
              <input onChange={()=>{
                setAgreed(!agreed)
              }} type={"checkbox"}></input>
              <span>Ya, saya memahami dan menyetujui/Yes, I understand and agreed</span>
        </div>
        <Button props={{ type: "primary", text: "Submit",disable:agreed }} />
      </div>
    </>
  );
}
