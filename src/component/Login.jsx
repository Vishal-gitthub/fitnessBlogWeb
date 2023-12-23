import React from "react";
import Footer from "./footer";

const Login = () => {
  return (
    <>
      <div className="logPageWrapper">
        <div className="loginPageContainer">
          <div className="loginCard">
            <h1>Login Here</h1>
            <div className="lCardContent">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                className="emailInput"
                placeholder="Enter Your Email "
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="pwInput"
                placeholder="Enter Your Password"
              />
              <button className="loginBtn">Login</button>
            </div>
          </div>
          <div className="logPageTemp">
            <img src="https://source.unsplash.com/300x400/?yoga" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
