import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import pic from '../assets/logotextv2.png'
import '../styles/loginregister.css'

export default function Register() {
  return (
	<React.Fragment>
  <CssBaseline />
  {/* The rest of your application */}
  <div className="container-fluid">
  <form action="#" className="">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
                <i className="fas fa-store"></i>
                <input type="text" placeholder="Storename" />
            </div>
            <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
        </form>
        <div className="panels-container">
        <div className="panel left-panel">
      <div className="content">
        <h3>One of us ?</h3>
        <p>
          Saritory project can help you organize your stores inventory and sales, to start 
          exploring our contents sign in now.
        </p>
        <button className="btn transparent" id="sign-in-btn">
          Sign in
        </button>
      </div>
      <img src={pic} className="image" alt=""/>
    </div>
    </div>
</div>

</React.Fragment>
  );
}
