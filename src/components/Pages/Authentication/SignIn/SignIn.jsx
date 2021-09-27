import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "../firebase.config";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../../../App";
import toast, { Toaster } from "react-hot-toast";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import { emailRegex, passRegex } from "../../../Regexp/Regexp";

const SignIn = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const [inputError, setInputError] = useState({});
  const [regInfo, setRegInfo] = useState({});

  const handleBlur = (e) => {
    
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const info = { ...regInfo };
    if (inputName === "email") {
      if (!emailRegex.test(inputValue)) {
        setInputError({
          name: inputName,
          errorMessage: "Please enter your Valid e-mail !",
        });
        info[inputName] = null;
        setRegInfo(info);
      } else {
        setInputError(null);
        info[inputName] = inputValue;
        setRegInfo(info);
        setUser(info);
      }
    }
    if (inputName === "password") {
      if (!passRegex.test(inputValue)) {
        setInputError({
          name: inputName,
          errorMessage: "Please enter your Valid password !",
        });
        info[inputName] = null;
        setRegInfo(info);
      } else {
        setInputError(null);
        info[inputName] = inputValue;
        setRegInfo(info);
        setUser(info);
      }
    }
  };

  const handleSignIn = (e) => {
    const execute = toast.success("Signed In Successfully");
    if (user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const { displayName } = res.user;
          const newUserInfo = { ...user };
          newUserInfo.isSignedIn = true;
          newUserInfo.name = displayName;
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          console.log("sign in user info", res.user);
          toast.success(execute);
          setLoggedInUser(newUserInfo);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          toast.remove(execute);
          toast.error(error.message);
          setUser(newUserInfo);
        });
    }
    e.preventDefault();
  };

  return (
    <div style={{ backgroundColor: "#F4F7FA" }}>
        <div
          classNameName="signInCard"
          style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Toaster position="top-center" />
          <div className="container px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
            <div className="cardItem card0 border-0 bg-white">
              <div className="row d-flex">
                <div className="col-lg-6">
                <Link to="/" style={{textDecoration:'none'}}>Return to home</Link>
                  <Slide right>
                  <div className="card1 pb-5">
                    <div className="row px-5 justify-content-center mt-4 mb-5 border-line">
                      {" "}
                      <img
                        src="https://friendlystock.com/wp-content/uploads/2019/10/7-black-businesswoman-driving-flashy-car-cartoon-clipart.jpg"
                        alt=""
                        className="image"
                      />{" "}
                    </div>
                  </div>
                  </Slide>
                </div>
                <form onSubmit={handleSignIn} className="col-lg-6">
                  <Fade top>
                  <div className="card2 cardItem border-0 px-4 py-5">
                    <div className="row px-3">
                      {" "}
                      <label className="mb-1">
                        <h6 className="mb-0 text-sm">Email Address</h6>
                      </label>{" "}
                      <input
                        className="mb-4"
                        type="email"
                        name="email"
                        placeholder="Enter a valid email address"
                        onChange={handleBlur}
                      />{" "}
                      {inputError?.name === "email" && (
                        <p className="text-danger text-center">
                          {inputError?.errorMessage}
                        </p>
                      )}
                    </div>
                    <div className="row px-3">
                      {" "}
                      <label className="mb-1">
                        <h6 className="mb-0 text-sm">Password</h6>
                      </label>{" "}
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        onChange={handleBlur}
                      />{" "}
                      {inputError?.name === "password" && (
                        <p className="text-danger text-center">
                          {inputError?.errorMessage}
                        </p>
                      )}
                    </div>
                    <div className="row my-4 px-3">
                      {" "}
                      <button
                        type="submit"
                        className="logBtn btn btn-primary text-center"
                      >
                        Login
                      </button>{" "}
                    </div>
                    <div className="row mb-4 px-3">
                      {" "}
                      <small className="font-weight-bold">
                        Don't have an account?{" "}
                        <Link to="/signUp" className="text-danger ">
                          Register
                        </Link>
                      </small>{" "}
                    </div>
                  </div>
                  </Fade>
                </form>
              </div>
            </div>
            {/* <button className="btn btn-info text-light mt-4">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Back To Home
              </Link>
            </button> */}
          </div>
        </div>
    </div>
  );
};

export default SignIn;
