import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const history = useNavigate();

  const [inputvalue, setinputvalue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);
  console.log(setData);
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
    const { name, email, password } = inputvalue;
    if (name === "") {
      alert(" name field is requred!");
    } else if (email === "") {
      alert("email field is requred");
    } else if (password === "") {
      alert("password field is requred");
    } else {
      history("/");
      localStorage.setItem("user", JSON.stringify([...data, inputvalue]));
    }
  };

  return (
    <div className="signup-container">
      <div className="detail-cont">
        <h2>Welcome To SignUp page</h2>
        <h4>SignUp to your Account by filling valid details</h4>
        <form type="submit">
          <lable>Name</lable><br />
          <input className="inp-field"
            Placeholder="enter Name"
            name="name"
            onChange={getdata}
          ></input><br />

          <lable>Email </lable><br />
          <input
            className="inp-field"
            fullWidth
            label="Email"
            type="email"
            Placeholder="enter email id"
            name="email"
            onChange={getdata}
          ></input><br />
          <lable>Password</lable><br />
          <input
            className="inp-field"
            type="password"
            Placeholder="enter password"
            name="password"
            onChange={getdata}
          ></input><br />

          <button className="submit-btn" type="submit" onClick={addData} variant="outlined">
            Submit Details
          </button>
        </form>
        <p className="signup">
          Already Have Account? <Link to={"/"} style={{ textDecoration: "none", color: 'green' }}> Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;

