import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";
import Button from "../Button/Button";
import axios from "axios";
import OTPInput from "react-otp-input";
export default function RegisterForm() {
  const navigate = useNavigate();
  //Agreed Button
  const [agreed, setAgreed] = useState(true);
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
  const [participantData, setParticipantData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [participant, setParticipant] = useState([]);
  const [otp, setOtp] = useState("");
  const [otpData, setOtpData] = useState(""); // OTP From Request BE
  const [registrationData, setRegistrationData] = useState({});
  const [popUp, setPopUp] = useState(false);
  var state = { regData: {}, status: false };
  //Fetching Training Data
  useEffect(() => {
    axios
      .get("https://ui.taxcentre.id/backend/api/calender/list.html?type_id=1")
      .then((res) => {
        console.log(res);
        const mapping = res.data.results
          .filter((data) => {
            return (
              (data.TypeID === "2" && data?.regDate > today) ||
              (data.TypeID === "3" && data?.regDate > today)
            ); /* data.TypeID === "3" && data?.RegDate > today */ //Webinar and Workshop
          })
          .map((data) => {
            return { value: data.ID, label: data.Judul };
          });
        setTraining(training.concat(mapping));
      });
  }, []);
  const [formData, setFormData] = useState({
    institution: "Individu",
  });
  //Training Type
  const [training, setTraining] = useState([
    { value: "21017875", label: "Brevet AB" },
    { value: "21017893", label: "Brevet C" },
    { value: "21018897", label: "Sertifikasi PPJK" },
  ]);
  const [trainingPeriod, setTrainingPeriod] = useState([]);
  const instance = [
    { value: 1, label: "Kementrian/Lembaga Negara" },
    { value: 2, label: "Pemerintah Daerah Provinsi" },
    { value: 3, label: "Pemerintah Daerah Kabupaten/Kota" },
    { value: 4, label: "BUMN" },
    { value: 5, label: "BUMD" },
    { value: 6, label: "Perusahaan Swasta" },
    { value: 7, label: "Lembaga Pendidikan" },
    { value: 8, label: "Lembaga Swadaya Masyarakat" },
    { value: 9, label: "Lembaga Internasional" },
    { value: 10, label: "Lembaga Penelitian" },
    { value: 11, label: "Kantor Akuntan Publik/Kantor Konsultan Pajak" },
    { value: 12, label: "Mitra Pembangunan" },
    { value: 13, label: "Industri Jasa Keuangan" },
    { value: 14, label: "Lembaga Non-Pemerintah" },
    { value: 15, label: "Individu" },
  ];
  let style = {
    display: formData.instansi_type !== 15 ? "block" : "none",
  };
  return (
    <>
      <div id="training-form">
        <ToastContainer className="participant-data-alert" autoClose={4000} />
        <h1>Registration Form</h1>
        <div className="form-container">
          <div className="form-wrapper">
            <span>Instansi/Institution</span>
            <Select
              options={instance}
              onChange={(e) => {
                const payment = e.value === 15 ? "Sendiri" : "Perusahaan";
                setFormData({ ...formData, instansi_type: e.value, payment }); // Individu = 15
              }}
            />
            <span>
              {formData.instansi_type === 15
                ? "Nama Lengkap/Fullname"
                : "Nama Institusi/Institution Name"}
            </span>
            <input
              placeholder={
                formData.instansi_type === 15
                  ? "Nama Lengkap/Fullname"
                  : "Nama Institusi/Institution Name"
              }
              type={"text"}
              onChange={(e) => {
                setFormData({ ...formData, payee_name: e.target.value });
                if (formData.instansi_type === 15)
                  setParticipantData({
                    ...participantData,
                    name: e.target.value,
                  });
              }}
            ></input>
            <span>Alamat/Address</span>
            <input
              placeholder="Alamat/Address"
              type={"text"}
              onChange={(e) => {
                setFormData({ ...formData, address: e.target.value });
              }}
            ></input>
            <span> {formData.instansi_type === 15 ? "NIK" : "NPWP"}</span>
            <input
              placeholder={formData.instansi_type === 15 ? "NIK" : "NPWP"}
              type={"text"}
              onChange={(e) => {
                setFormData({ ...formData, npwp: e.target.value });
              }}
            ></input>
            <span style={style}>Officer Name/Nama Petugas</span>
            <input
              style={style}
              placeholder="Officer Name/Nama Petugas"
              type={"text"}
              onChange={(e) => {
                setFormData({ ...formData, officer_name: e.target.value });
              }}
            ></input>
            <span style={style}>Designation/Jabatan</span>
            <input
              style={style}
              placeholder="Designation/Jabatan"
              type={"text"}
              onChange={(e) => {
                setFormData({ ...formData, designation: e.target.value });
              }}
            ></input>
            <span>Phone Number/Nomor Telepon</span>
            <input
              placeholder="+62xxxxxxxxxx"
              type={"text"}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                if (formData.instansi_type === 15)
                  setParticipantData({
                    ...participantData,
                    phone: e.target.value,
                  });
              }}
            ></input>
            <span>Email</span>
            <input
              placeholder="Email"
              type={"text"}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (formData.instansi_type === 15)
                  setParticipantData({
                    ...participantData,
                    email: e.target.value,
                  });
              }}
            ></input>
          </div>
          <div className="form-wrapper">
            <span>Seminar/Training</span>
            <Select
              options={training}
              onChange={(e) => {
                axios
                  .get(
                    "https://ui.taxcentre.id/backend/api/calender/list.html?type_id=1"
                  )
                  .then((res) => {
                    res.data.results
                      .filter((data) => {
                        return (
                          data.ID === e.value || data.TrainingID === e.value
                        );
                      })
                      .map((data) => {
                        setTrainingPeriod([
                          { value: data.ID, label: data.Date },
                        ]);
                      });
                  });
              }}
            />
            <span>Periode Pelatihan/Training Period</span>
            <Select
              options={trainingPeriod}
              onChange={(e) => {
                setFormData({ ...formData, calender_id: e.value });
              }}
            />
          </div>
        </div>
        <div className="participant-data-container" style={style}>
          <h1>Participant Data</h1>
          <span>{"Nama Lengkap/Fullname"}</span>
          <input
            class="data-container"
            placeholder={"Nama Lengkap/Fullname"}
            type={"text"}
            onChange={(e) => {
              setParticipantData({ ...participantData, name: e.target.value });
            }}
          ></input>
          <span>{"Alamat Email/Email Address"}</span>
          <input
            class="data-container"
            placeholder={"Email"}
            type={"email"}
            onChange={(e) => {
              setParticipantData({ ...participantData, email: e.target.value });
            }}
          ></input>
          <span>{"Nomor Telepon/Phone Number"}</span>
          <input
            class="data-container"
            placeholder={"Nomor Telepon/Phone Number"}
            type={"text"}
            onChange={(e) => {
              setParticipantData({ ...participantData, phone: e.target.value });
            }}
          ></input>
          <div className="training-button-container">
            <Button
              props={{
                type: "primary",
                text: "Add Participant",
                function: () => {
                  const input =
                    document.getElementsByClassName("data-container");

                  if (
                    participantData.email !== "" &&
                    participantData.phone !== "" &&
                    participantData.name !== ""
                  ) {
                    setParticipant([...participant, participantData]);
                    toast.success(`Participant ${participantData.name} added`, {
                      hideProgressBar: false,
                      closeOnClick: false,
                      pauseOnHover: true,
                      draggable: false,
                      progress: undefined,
                      theme: "colored",
                    });
                    for (let index = 0; index < input.length; index++) {
                      const element = input[index];
                      element.value = "";
                    }
                    setParticipantData({ name: "", email: "", phone: "" });
                  } else {
                    toast.error(`Please fill all required field`, {
                      hideProgressBar: false,
                      closeOnClick: false,
                      pauseOnHover: true,
                      draggable: false,
                      progress: undefined,
                      theme: "colored",
                    });
                  }
                },
              }}
            />
          </div>
        </div>
        <div></div>
        <div className="declaration">
          <h3>Pernyataan/Declaration</h3>
          <ol>
            <li>
              Saya/kami telah membaca dan memahami semua informasi yang
              disajikan terkait dengan Tax Centre FIA Universitas Indonesia dan
              kegiatan yang akan kami ikuti/I/we have read and understand the
              Tax Centre FIA Universitas Indonesia event will be participated.
            </li>
            <li>
              Menyatakan bahwa semua data yang saya/kami sampaikan pada formulir
              ini adalah valid sesuai dengan fakta yang sebenarnya/Declare that
              the facts stated in this form are true and correct to the best of
              my knowledge and that I have not misrepresented any material
              facts.
            </li>
            <li>
              Menyatakan bahwa selama mengikuti kegiatan Training Brevet
              Konsultan Pajak AB yang akan saya/kami ikuti, saya/kami akan
              manaati semua peraturan yang ditetapkan oleh Tax Centre FIA
              Universitas Indonesia/I/we will comply with any rule and
              regulation governing the event will be held.
            </li>
          </ol>
          <input
            onChange={() => {
              setAgreed(!agreed);
            }}
            type={"checkbox"}
          ></input>
          <span>
            Ya, saya memahami dan menyetujui/Yes, I understand and agreed
          </span>
        </div>
        <Button
          props={{
            type: "primary",
            text: "Submit",
            disable: agreed,
            function: async () => {
              async function participantPost(registerId) {
                participant.forEach((data) => {
                  const form = new FormData();
                  form.append("registration_id", registerId);
                  form.append("name", data.name);
                  form.append("phone", data.phone);
                  form.append("email", data.email);
                  axios.post(
                    "https://ui.taxcentre.id/backend/api/event/participant.html",
                    form
                  );
                  /* Belum Masukkin Error Handler */
                });
                return { participantPost: { done: true, error: false } };
              }
              if (participant.includes(participantData) === false)
                setParticipant([...participant, participantData]);
              const form = new FormData();
              form.append("address", formData.address);
              form.append("calender_id", formData.calender_id);
              form.append("email", formData.email);
              form.append("instansi_type", formData.instansi_type);
              form.append("institution", formData.institution);
              form.append("npwp", formData.npwp);
              form.append("payee_name", formData.payee_name);
              form.append("phone", formData.phone);
              form.append("designation", formData.designation);
              form.append("officer_name", formData.officer_name);
              const result = await axios.post(
                "https://ui.taxcentre.id/backend/api/event/register.html",
                form
              );
              if (result?.data.status === true) {
                state.regData = result.data;
                setRegistrationData(await result.data);
                setOtpData((await result.data.token_id) + ""); //convert to string
                const postData = await participantPost(result.data.register_id);
                if (
                  postData.participantPost.done === true &&
                  postData.participantPost.error === false
                ) {
                  setPopUp(!popUp);
                } else
                  toast.error("Please fill all required field", {
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                  });
              } else {
                toast.error("Please fill all required field", {
                  hideProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true,
                  draggable: false,
                  progress: undefined,
                  theme: "colored",
                });
              }
            },
          }}
        />
      </div>
      {/* Pop UP Component */}

      <div style={{ display: popUp ? "flex" : "none" }} id="OTP">
        <div className="OTPContainer">
          <h1>Enter Verification Code</h1>
          {/*  <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>{
            setPopUp(!popUp)
          }} viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg> */}
          <OTPInput
            inputStyle={{
              border: "1px solid black",
              width: "25%",
              height: "50px",
            }}
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderInput={(props) => <input {...props} />}
          />
          <span>We sent the Verification code to {formData.email}</span>
          <Button
            props={{
              type: "primary",
              text: "Confirm",
              function: () => {
                //if otp -> Otp input === otp data --> OTP Generated
                if (otp === otpData) {
                  const form = new FormData();
                  form.append("status", "Approve");
                  form.append("email", formData.email);
                  form.append("token_id", otpData);
                  form.append("calender_id", formData.calender_id);
                  axios
                    .post(
                      `https://ui.taxcentre.id/backend/api/event/register-verify.html`,
                      form
                    )
                    .then((res) => {
                      state.status = true;
                      state.regData = registrationData;
                      if (res.data.status)
                        navigate(`/training/register/finish`, { state });
                      else
                        toast.error("Confirmation Error", {
                          hideProgressBar: false,
                          closeOnClick: false,
                          pauseOnHover: true,
                          draggable: false,
                          progress: undefined,
                          theme: "colored",
                        });
                    });
                } else
                  toast.error("Wrong Code", {
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                  });
              },
            }}
          />
        </div>
      </div>
    </>
  );
}
