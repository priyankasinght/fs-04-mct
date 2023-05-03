import "./LoginPage.css"
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const history = useNavigate();
  const [inputvalue, setinputvalue] = useState({
    email: "",
    password: "",
  });

  const getdata = (e) => {
    e.preventDefault();
    const { value, name } = e.target;

    setinputvalue(() => {
      return {
        ...inputvalue,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();
    const getuserArr = localStorage.getItem("user");
    console.log(getuserArr);
    const { email, password } = inputvalue;

    if (email === "") {
      alert("email field is requred or if you are not Sign up then first sigup to your account");
    } else if (password === "") {
      alert("password requred or if you are not Sign up then first sigup to your account");
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("user login succesfulyy");

          localStorage.setItem("user_login", JSON.stringify(userlogin));

          history("/Home");
        }
      }
    }
  };

  return (
    <div className="login-ctr">
      <div className="login-img">
        <img className="img" src='https://w0.peakpx.com/wallpaper/145/713/HD-wallpaper-beauty-and-the-beast-2017-poster-beauty-and-the-beast-movie-rose-emma-watson-fantasy-luke-evans-disney-blue.jpg' alt=''></img>
      </div>
      <div className="login-detail">
        <div>
          <h1>Welcome Back</h1>
          <h5>Sign in to your Account</h5>
        </div>
        <form>
          <div
            className="input-container"
            style={{
              width: "350px",
              maxWidth: "100%",
            }}
          >
            <input
              className="input"
              type="email"
              placeholder="enter email id"
              name="email"
              onChange={getdata}
            />
          </div>
          <div
            className="input-container"
            style={{
              width: "350px",
              maxWidth: "100%",
            }}
          >
            <input
              className="input"
              type="password"
              placeholder="enter password"
              name="password"
              onChange={getdata}
            />
          </div>

          <button className="login-btn" type="submit" onClick={addData} variant="outlined">
            Login
          </button>
        </form>
        <Link to={"/CreateAccount"} style={{ color: "white", marginLeft: "200px" }}>
          <button className="sign-btn">SignUp</button>
        </Link>
      </div>
    </div>
  )
}

export default LoginPage;
