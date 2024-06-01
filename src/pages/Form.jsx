import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundMain from "../assets/backgroundMain.png"
import "./Form.css"

function Form() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });
  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleCheckbox = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { ...errors };
    if (
      formData.name.trim().length === 0 ||
      formData.name === undefined ||
      formData.name === null
    ) {
      newErrors.name = "Name is required";
    } else {
      newErrors.name = "";
    }
    if (
      formData.username.trim().length === 0 ||
      formData.username === undefined ||
      formData.username === null
    ) {
      newErrors.username = "Username is required";
    } else {
      newErrors.username = "";
    }
    if (
      formData.email.trim().length === 0 ||
      formData.email === undefined ||
      formData.email === null
    ) {
      newErrors.email = "Email is required";
    } else {
      newErrors.email = "";
    }
    if (
      formData.mobile.trim().length === 0 ||
      formData.mobile === undefined ||
      formData.mobile === null
    ) {
      newErrors.mobile = "Mobile is required";
    } else {
      newErrors.mobile = "";
    }
    if (!formData.checkbox) {
      newErrors.checkbox = "Please accept the terms and conditions";
    } else {
      newErrors.checkbox = "";
    }
    setErrors({ ...newErrors });
    if (
      newErrors.name === "" &&
      newErrors.username === "" &&
      newErrors.email === "" &&
      newErrors.mobile === "" &&
      newErrors.checkbox === ""
    ) {
      localStorage.setItem("userData", JSON.stringify(formData));
      navigate("/genre");
    }
  };
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div className='left-main'>     
        <img src={backgroundMain} alt='backgroundImage'/>

        <p>
          Discover new things on Superapp
        </p>

      </div>
      <form
        style={{
          display: "flex",
          gap: "1rem",
          width: "50vw",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "40vw",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <h1>Super app</h1>
          <p className='createAcc'>Create your new account</p>
          <div>
            <input className='form-input'
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              placeholder="Name"
              style={{
                border: `1px solid ${errors.name.length > 0 ? "red" : "green"}`,
                borderRadius: "5px",
                padding: "2px 5px",
              }}
            />
            <p style={{ color: "red" }}>{errors.name}</p>
          </div>
          <div>
            <input className='form-input'
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
              placeholder="Username"
              style={{
                border: `1px solid ${
                  errors.username.length > 0 ? "red" : "green"
                }`,
                padding: "2px 5px",
                borderRadius: "5px",
              }}
            />
            <p style={{ color: "red" }}>{errors.username}</p>
          </div>
          <div>
            <input className='form-input'
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              style={{
                border: `1px solid ${
                  errors.email.length > 0 ? "red" : "green"
                }`,
                padding: "2px 5px",
                borderRadius: "5px",
              }}
              placeholder="Email"
            />
            <p style={{ color: "red" }}>{errors.email}</p>
          </div>
          <div>
            <input className='form-input'
              type="tel"
              name="mobile"
              id="mobile"
              style={{
                border: `1px solid ${
                  errors.mobile.length > 0 ? "red" : "green"
                }`,
                padding: "2px 5px",
                borderRadius: "5px",
              }}
              onChange={handleChange}
              placeholder="Mobile"
            />
            <p style={{ color: "red" }}>{errors.mobile}</p>
          </div>
          <div>
            <input
              onChange={handleCheckbox}
              type="checkbox"
              name="checkbox"
              id="checkbox"
              style={{
                border: `1px solid ${
                  errors.checkbox.length > 0 ? "red" : "green"
                }`,
                padding: "2px 5px",
                borderRadius: "5px",
                
              }}
            />
            <label
              style={{
                marginLeft: "10px",
                color: "white"
              }}
              htmlFor="checkbox"
            >
              I agree to the terms and conditions
            </label>
            <p style={{ color: "red" }}>{errors.checkbox}</p>
          </div>
          <button className='btn-submit'  type="submit">
            Submit
          </button>
          <p className='normalText'>By clicking on the sign up. You agree to Superapp <span>Tearms and condition of use</span></p>
          <p className='normalText'>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></p>
        </div>
      </form>
    </div>
  );
}

export default Form