import React from 'react'
import pic from '../assets/logotextv2.png'
import CssBaseline from '@mui/material/CssBaseline';
import '../styles/loginregister.css'


export default function Login() {
const afterClick = () => {

sign_up_btn.addEventListener("click", () => {
container-fluid.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
container-fluid.classList.remove("sign-up-mode");
});

}


return (
<React.Fragment>
    <CssBaseline />
    {/* The rest of your application */}
    <div className="container-fluid">
        <div className="portal-container sign-up-mode">
            {/* <img src={pic} className="image" alt="" /> */}
            <div className="forms-container">
                <div className="signin-signup">
                    {/* LOGIN FORM */}
                    <form id="loginForm" className="sign-in-form" autocomplete="off">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field ">
                            <i className="fas fa-user label-icon"></i>
                            <input type="text" placeholder="Username" id="usernameLogin" />
                            <i className="fas fa-check-circle validation-icon"></i>
                            <i className="fas fa-exclamation-circle validation-icon"></i>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock label-icon"></i>
                            <input type="password" placeholder="Password" id="passwordLogin" />
                            <i className="fas fa-check-circle validation-icon"></i>
                            <i className="fas fa-exclamation-circle validation-icon"></i>
                        </div>
                        <input type="submit" value="Login" className="btn solid" />
                        {/* <p className="social-text">Or Sign in with social platforms</p>
                        // <div className="social-media">
                            // <a href="#" className="social-icon">
                                // <i className="fab fa-facebook-f"></i>
                                // </a>
                            // <a href="#" className="social-icon">
                                // <i className="fab fa-twitter"></i>
                                // </a>
                            // <a href="#" className="social-icon">
                                // <i className="fab fa-google"></i>
                                // </a>
                            // <a href="#" className="social-icon">
                                // <i className="fab fa-linkedin-in"></i>
                                // </a>
                            // </div> */}
                    </form>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>
                                Welcome to saritory project, if you're new here click the button bellow to sign up
                                and start your journey with us.
                            </p>
                            <button className="btn transparent" id="sign-up-btn" onClick={afterClick}>
                                Sign up
                            </button>
                        </div>
                        <img src={pic} className="image" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>


</React.Fragment>
);
}