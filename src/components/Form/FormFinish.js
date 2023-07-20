import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { icon } from "../../assets/Icon";
import Button from "../Button/Button";
import axios from "axios";
export default function RegisterFinish() {
  const { state } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
   
    
  },[]);
  if (state.status)
    return (
      <>
        <div id="registerFinish">
          {state.regData.status? (
            <div className="register-finish-container">
              {icon.check}
              <h1>Registrasi Berhasil</h1>
              <div>
                <span>Registration ID :</span>
                <span>{state.regData.register_id}</span>
              </div>
              <div>
                <span>Payers Name :</span>
                <span>{state.regData.payee_name}</span>
              </div>
              <Button
                props={{
                  type: "primary",
                  text: "Back Home",
                  function: () => {
                    navigate("/");
                  },
                }}
              />
            </div>
          ) : (
            <div>
              <h1 id="Loading">Loading</h1>
            </div>
          )}
        </div>
      </>
    );
  else
    return (
      <>
        <div id="registerFinish">
          <div className="register-finish-container">
            {icon.cross}
            <h1>Registrasi Gagal</h1>
            <Button
              props={{
                type: "primary",
                text: "Back Home",
                function: () => {
                  navigate("/");
                },
              }}
            />
          </div>
        </div>
      </>
    );
}
