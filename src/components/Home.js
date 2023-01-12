import React from "react";
import style from "./Home.module.css";
import loginLogo from "../images/loginLogo.svg";

function Home() {
  return (
    <div className={style.home}>
      <div className={style.loginlogo}>
        <img src={loginLogo} alt="loginLogo"></img>
      </div>
      <div className={style.logininfo}>
        <p className={style.loginHeading}>Login</p>
        <p className={style.id_pass}>Login ID</p>
        <input className={style.input} placeholder="Enter Login ID"></input>
        <p className={style.id_pass}>Password</p>
        <input
          className={style.input}
          placeholder="Enter Password"
          type="Password"
        ></input>
        <div className={style.rem_change}>
          <div className={style.checkbox}>
            <input type="checkbox"></input>
            <p>Remember Me</p>
          </div>
          <p className={style.change}>Change Password</p>
        </div>
        <div className={style.checkbox}>
          <input type="checkbox"></input>
          <p>
            Agree to <small>Terms and Conditions</small>
          </p>
        </div>
        <div className={style.flexcenter}>
          <button>Login</button>
        </div>
        <div className={style.flexcenter}>
          <p>
            Don't have an account? <small>Register here</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
