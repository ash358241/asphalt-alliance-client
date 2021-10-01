import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { UserContext } from '../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);

    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        email: "",
        password: "",
        error: "",
        success: false,
      });

    const handleSignOut = () => {

        firebase.auth().signOut()
            .then(res => {
                const signOutUser = {
                    isSignedIn: 'false',
                    name: "",
                    email: '',
                    password: '',
                    error: '',
                    photo: ''
                }
                setUser(signOutUser);
                setLoggedInUser({});
                console.log(res);
            })

            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }

    return (
       <>
       <div className="sidebar-container">
  <div className="sidebar-logo">
    Asphalt Alliance
  </div>
  <ul className="sidebar-navigation">
    <li className="header">Navigation</li>
    <li>
      <Link to="/">
        <i className="fa fa-home" aria-hidden="true"></i> Homepage
      </Link>
    </li>
    <li>
      <Link to="/dashboard">
        <i className="fa fa-tachometer" aria-hidden="true"></i> Entry Request
      </Link>
    </li>
    <li>
      <Link to="/specificEntry">
        <i className="fa fa-tachometer" aria-hidden="true"></i> Manage Entry
      </Link>
    </li>
    <li>
      <Link to="/provideFeedback">
        <i className="fa fa-tachometer" aria-hidden="true"></i> Provide Feedback
      </Link>
    </li>
    <li className="header">Another Menu</li>
    <li>
      <Link to="/" onClick={handleSignOut} >
      <i class="fas fa-sign-out-alt"></i> SignOut
      </Link>
    </li>
  </ul>
</div>

<div className="content-container">

  
</div>
       </>
    );
};

export default Sidebar;