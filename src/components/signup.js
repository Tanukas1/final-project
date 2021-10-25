import { Formik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import app_config from "../config";
import "./signup.css";

function Signup() {
  const url = app_config.api_url;

  const signupForm = {
    username: "",
    email: "",
    password: "",
    dob: "",
  };

  const loginForm = {
    email: "",
    password: "",
  };

  const signupSubmit = (values) => {
    console.log(values);

    const reqOptions = {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    };

    fetch(url + "/user/add", reqOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Now Login to Continue!",
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const loginSubmit = (values) => {
    console.log(values);

    fetch(url + "/user/getbyemail/" + values.email)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data) {
          if (data.password == values.password) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Loggedin Successfully",
            });

            console.log("login success");
            // setLoggedIn(true);
            sessionStorage.setItem("user", JSON.stringify(data));
            window.location.replace("/create");

            return;
          } else {
            console.log("password incorrect");
          }
        } else {
          console.log("email not found");
        }

        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Email or password is incorrect!",
        });
      });
  };

  return (
    <div class="main">
      <div class="box">
        <input type="checkbox" class="toggle-btn" name="" />
        <div class="signup">
          <Formik initialValues={signupForm} onSubmit={signupSubmit}>
            {({ values, handleChange, handleSubmit }) => (
              <form class="form-horizontal signup-form" onSubmit={handleSubmit}>
                <div class="input-group">
                  <span>Username</span>
                  <input
                    type="text"
                    placeholder="abc123"
                    class="inp"
                    id="username"
                    onChange={handleChange}
                    value={values.username}
                  />
                </div>
                <div class="input-group">
                  <span>Email</span>
                  <input
                    type="email"
                    placeholder="abc@gmail.com"
                    id="email"
                    onChange={handleChange}
                    value={values.email}
                    class="inp"
                  />
                </div>
                <div class="input-group">
                  <span>Password</span>
                  <input
                    type="password"
                    placeholder="******"
                    class="inp"
                    id="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                </div>
                <div class="input-group">
                  <span>DOB</span>
                  <input
                    type="date"
                    class="inp"
                    id="dob"
                    onChange={handleChange}
                    value={values.dob}
                  />
                </div>
                <div class="input-group" style={{ margintop: "20px" }}>
                  <input type="submit" value="Signup" class="inp" submit-inp />
                </div>
              </form>
            )}
          </Formik>
        </div>

        <div class="login">
          <Formik initialValues={loginForm} onSubmit={loginSubmit}>
            {({ values, handleSubmit, handleChange }) => (
              <form class="form-horizontal login-form" onSubmit={handleSubmit}>
                <div class="input-group">
                  <span>Email</span>
                  <input
                    type="email"
                    placeholder="abc@gmail.com"
                    id="email"
                    onChange={handleChange}
                    value={values.email}
                    class="inp"
                  />
                </div>
                <div class="input-group">
                  <span>Password</span>
                  <input
                    type="password"
                    placeholder="******"
                    id="password"
                    onChange={handleChange}
                    value={values.password}
                    class="inp"
                  />
                </div>

                <div class="input-group" style={{ margintop: "20px" }}>
                  <input type="submit" name="Login" class="inp" submit-inp />
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
export default Signup;
