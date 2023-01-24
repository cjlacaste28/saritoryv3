import React, {useState} from 'react'
import pic from '../assets/SARITORY_with_text_v2.png'
import CssBaseline from '@mui/material/CssBaseline';
import '../styles/loginregister.css'


export default function Register() {
    const [formsMode, setFormsMode] = useState('sign-up-mode');
    const signUpMode = () => { 
        setFormsMode('sign-up-mode');
     }
     const signInMode = () => { 
        setFormsMode('');
     }

    
const changeFormMode = () => {
}


return (
  <React.Fragment>
      <CssBaseline />
      {/* The rest of your application */}
      <div id="portal">
          <div class={['portal-container', formsMode].join(' ')}>
          
                  {/* <img src={pic} className="image" alt="" /> */}
                  <div className="forms-container">
                      <div className="signin-signup">
                          {/* LOGIN FORM */}
                          <form id="loginForm" className="sign-in-form" autocomplete="off">
                              <h2 className="title">Sign in</h2>
                              <div className="input-field ">
                                  <i className="fas fa-user label-icon"></i>
                                  <input type="text" placeholder="Username" id="usernameLogin" />
                                  {/* <i className="fas fa-check-circle validation-icon"></i>
                                  <i className="fas fa-exclamation-circle validation-icon"></i> */}
                              </div>
                              <div className="input-field">
                                  <i className="fas fa-lock label-icon"></i>
                                  <input type="password" placeholder="Password" id="passwordLogin" />
                                  {/* <i className="fas fa-check-circle validation-icon"></i>
                                  <i className="fas fa-exclamation-circle validation-icon"></i> */}
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
  
                          <form id="registerForm" action="#" className="sign-up-form" autocomplete="off">
                              <h2 className="title">Sign up</h2>
                              <div className="input-field">
                                  <i className="fas fa-store label-icon"></i>
                                  <input type="text" placeholder="Storename" />
                              </div>
                              <div className="input-field">
                                  <i className="fas fa-user label-icon"></i>
                                  <input type="text" placeholder="Username" />
                              </div>
                              <div className="input-field">
                                  <i className="fas fa-envelope label-icon"></i>
                                  <input type="email" placeholder="Email" />
                              </div>
                              <div className="input-field">
                                  <i className="fas fa-lock label-icon"></i>
                                  <input type="password" placeholder="Password" />
                              </div>
                              <input type="submit" className="btn" value="Sign up" />
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
                                  <button className="btn transparent" id="sign-up-btn" onClick={signUpMode}>
                                      Sign up
                                  </button>
                              </div>
                              <img src={pic} className="image" alt="logo" />
                          </div>
                          <div className="panel right-panel">
                              <div className="content">
                                  <h3>One of us ?</h3>
                                  <p>
                                      Saritory project can help you organize your stores inventory and sales, to start 
                                      exploring our contents sign in now.
                                  </p>
                                  <button className="btn transparent" id="sign-in-btn" onClick={signInMode}>
                                      Sign in
                                  </button>
                              </div>
                              <img src={pic} className="image" alt="logo" />
                          </div>
                      </div>
                  </div>
          </div>
      </div>
  
  
  </React.Fragment>
  );
}