import React, {useRef, useState} from 'react'
import pic from '../assets/SARITORY_with_text_v2.png'
import CssBaseline from '@mui/material/CssBaseline';
import '../styles/loginregister.css'
import { useStateContext } from '../context/ContextProvider.jsx';
import axiosClient from '../axios-clent';

export default function Register() {
    const [formsMode, setFormsMode] = useState('sign-up-mode');
    const signUpMode = () => { 
        setFormsMode('sign-up-mode');
     }
     const signInMode = () => { 
        setFormsMode('');
     }

     const usernameRefLogin = useRef();
     const usernameRef = useRef();
     const emailRef = useRef();
     const storeRef = useRef();
     const passwordRefLogin = useRef();
     const passwordRef = useRef();
     const confirmpasswordRef = useRef();
     const [errors, setErrors] = useState(null)
     const {setUser, setToken} = useStateContext();

     const onSubmitRegister = (event) => { 
        event.preventDefault();
        const payload = {
            store_name: storeRef.current.value,
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: confirmpasswordRef.current.value,
        }
        console.log('====================================');
        console.log(payload);
        console.log('====================================');
        axiosClient.post('/register', payload)
        .then(({data}) => {
            setToken(data.token);
            setUser(data.user);
            console.log('====================================');
                console.log(`token here: ${data.token}`);
                console.log(`username here: ${data.user}`);
            console.log('====================================');
        }).catch(err => {
            const response = err.response;
            if(response && response.status === 422){
                console.log('====================================');
                console.log(response.data.errors);
                console.log('====================================');
                setErrors(response.data.errors);
                console.log('====================================');
                console.log('This is from errors'+ JSON.stringify(errors));
                console.log('====================================');
            }
        });
     }

     const onSubmitLogin = (event) => { 
        event.preventDefault();
        const payload = {
            username: usernameRefLogin.current.value,
            password: passwordRefLogin.current.value,
        }
        console.log('====================================');
        console.log(payload);
        console.log('====================================');
     }

return (
  <React.Fragment>
      <CssBaseline />
      {/* The rest of your application */}
      <div id="portal">
          <div className={['portal-container', formsMode].join(' ')}>
          
                  {/* <img src={pic} className="image" alt="" /> */}
                  <div className="forms-container">
                      <div className="signin-signup">
                          {/* LOGIN FORM */}
                          <form id="loginForm" className="sign-in-form" onSubmit={onSubmitLogin}>
                            <h2 className="title">Sign in</h2>
                            {errors &&
                                <div className="alert">
                                {Object.keys(errors).map(key => (
                                    <h2 key={key}>{errors[key][0]}</h2>
                                ))}
                                </div>
                            }
                            <div className="input-field">
                                <i className="fas fa-user label-icon"></i>
                                <input ref={usernameRefLogin} type="text" placeholder="Username" id="usernameLogin"/>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock label-icon"></i>
                                <input ref={passwordRefLogin} type="password" placeholder="Password" id="passwordLogin"/>
                            </div>
                            <input type="submit" value="Login" className="btn solid"/>
                        </form>

                        <form id="registerForm" action="#" className="sign-up-form" onSubmit={onSubmitRegister}>
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-store label-icon"></i>
                                <input ref={storeRef} type="text" placeholder="Storename" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-user label-icon"></i>
                                <input ref={usernameRef} type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope label-icon"></i>
                                <input ref={emailRef} type="email" placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock label-icon"></i>
                                <input ref={passwordRef} type="password" placeholder="Password" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock label-icon"></i>
                                <input ref={confirmpasswordRef} type="password" placeholder="Confirm Password" />
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