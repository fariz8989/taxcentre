import React from "react";
export default function LoginForm() {
  return (
    <>
      <div id="login-form">
        <div className="login-wrapper">
          <div className="login-image">
            <div></div>
            <div>
              <h2>Welcome To</h2>
              <h1>Tax Centre FIA UI</h1>
            </div>
          </div>
          <div className="login-input">
            <h1>LOGIN</h1>
            <div className="login-input-wrapper">
              <span>Username</span>
              <input placeholder="Your Username" type={"text"}></input>
              <span>Password</span>
              <input placeholder="Your Password" type={"text"}></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
