import React from 'react';
import { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import icon from '../../images/logos/logo.png'
import googleIcon from "../../images/googleIcon.png"
import { UserContext } from '../../App';


firebase.initializeApp(firebaseConfig);
const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {


            const { displayName, email, photoURL } = result.user;
            const newUser = {
                isSignedIn: true,
                email: email,
                name: displayName,
                photo: photoURL
            };
            sessionStorage.setItem('name', displayName);
            sessionStorage.setItem('img', photoURL);
            setLoggedInUser(newUser);
            history.replace(from);

        }).catch(function (error) {
            console.log(error)

        });



    };




    return (
        <div className="mt-4">
            <Link to="/" className="d-flex justify-content-center">
                <img style={{ width: "300px" }} className="icon " src={icon} alt="" />
            </Link>

            <div className="d-flex justify-content-center mt-5">
                <div className="mx-5 py-5 my-5 col-4" style={{ backgroundColor: "white", border: "1px solid lightGray" }} >
                    <h3 className="text-center mb-4" >Login with</h3>


                    <div className="text-center mb-4">
                        <button onClick={handleGoogleSignIn} style={{ borderRadius: "20px", backgroundColor: 'white', color: "black" }} className="btn btn-secondary" >
                            <span>
                                <img src={googleIcon} style={{ maxWidth: "32px" }} alt="google logo" />
                            </span>
                            <span className="ml-3">Continue with Google</span>
                        </button>
                    </div>


                    <div className="text-center">
                        <div className="register-login d-flex justify-content-center">
                            <p>Don’t have an account?</p>
                            <a style={{ color: '#00BFFF', marginTop: '-7px', textDecoration: 'underline' }} href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp" className="btn btn-logintoggle" >
                                Create an account
				</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Login;