import React from 'react'
import firebase from "firebase/compat/app";
import { auth } from './firebase'
import '../ChatProps/Signin.css';
import { Link } from 'react-router-dom';
import googleLogo from "../../img/search.png"
import Zoom from 'react-reveal/Zoom';

const SignIn = () => {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <>
        <Zoom>
        <div className="container py-5 my-xl-5">
			<div className="logo text-center w-25 mx-auto">
				<Link to="/">
					<h1>Asphalt Alliance</h1>
				</Link>
			</div>
			<div className="d-flex align-items-center justify-content-center pb-5 my-5">
				<div className="login-register login p-md-5 p-3">
					<h4 className="mb-5">Login With</h4>
					<button className="btn btn-outline-secondary social-login" onClick={signInWithGoogle}>
						<img src={googleLogo} alt="" style={{ maxWidth: "28px" }} />
						Continue with Google
					</button>
					<h5 className="mt-3">
                        <h6 style={{color:'blue'}}>OR</h6>
						<span>Signin with <Link to="/signIn">email-password</Link> to chat</span>
					</h5>
				</div>
			</div>
		</div>
        </Zoom>
        </>
    )
}

export default SignIn