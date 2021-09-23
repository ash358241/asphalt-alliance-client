import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import '../SignIn/SignIn.css';
// import {emailRegex, passRegex} from '../../../RegEx/RegEx';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from '../firebase.config'; 
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from "../../../../App";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "signIn" } };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  } else {
      firebase.app();
  }

  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    error: '',
    success: false,
});

// const [newUser, setNewUser] = useState(false);

//field validating
const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === "email"){
        isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === "password"){
        const isPasswordValid = e.target.value.length > 6;
        const passwordHasNumber =  /\d{1}/.test(e.target.value);
        isFieldValid = isPasswordValid && passwordHasNumber; 
    }
    if(isFieldValid){
        const newUserInfo = {...user};
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
    }
    e.preventDefault();
}

//SignIn or SignUp
const handleRegister = (e) => {
  const success = toast.success("SignedUp Successful");
    if(user.email && user.password){
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        updateUserName(user.name);
        toast.success(success);
        toast.dismiss(success);
        setLoggedInUser(newUserInfo);
        history.replace(from);
        })
        .catch((error) => {
            const newUserInfo = {...user};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            toast.dismiss(success)
            toast.error(error.message)
            setUser(newUserInfo);
        });
    }
    e.preventDefault();
}

//update user
const updateUserName = (name) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
    displayName: name
    }).then(function() {
    console.log('Update successful')
    }).catch(function(error) {
        console.log(error);
    });
}

  return (
    <div classNameName="signUpCard" style={{minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F4F7FA'}}>
       <Toaster position="top-center" reverseOrder={false} />
      <div className="container px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="cardItem card0 border-0 bg-white">
          <div className="row d-flex">
            <div className="col-lg-6">
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
            </div>
            <form onSubmit={handleRegister} className="col-lg-6">
              <div className="card2 cardItem border-0 px-4 py-5" >
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
                    onBlur={handleBlur}
                  />{" "}
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
                    onBlur={handleBlur}
                  />{" "}
                </div>
                <div className="row my-4 px-3">
                  {" "}
                  <button type="submit" className="logBtn btn btn-primary text-center">
                    Register
                  </button>{" "}
                </div>
                <div className="row mb-4 px-3">
                  {" "}
                  <small className="font-weight-bold">
                    Already have an account? <Link to="/signIn" className="text-danger ">SignIn</Link>
                  </small>{" "}
                </div>
              </div>
              
            </form>
          </div>
        </div>
        <button className="btn btn-info text-light mt-4">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Back To Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
