import React from 'react'
import './css/login.css';
import logo from '../assets/logo.svg'
import para from '../assets/parachute.png'
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";  
import Navbar from "../topbar/topbar"; 

const login = () => {
  return (
    <>
    {/* code for navbar if needed  please uncomment below code for navbar */}
    {/* <Navbar /> */}
    <div className='split-screen' id='container' >
        {/* code to create left side container  */}
        <div className='form-container first more-information' >
            <div className='social-container'>
                {/* code for logo image */}
                <div className='top-logo'>
                    <img src={logo} />
                </div>
                {/* code for parachute image */}
                <div className='para'> 
                    <img src={para} />
                </div>
                {/* code for get flat 40% */}
                <div className='get-offer' >
                    <h1 className='first'> <span>G</span>et flat </h1>
                    <h1 className='second'>40%</h1>
                    <p>off on your first order with us.</p>
                </div>
                {/* code for button use code */}
                <div className='button-code'>
                    <button className='btn btn-primary'><span><strong>Use code</strong></span> VFLFIRST</button>
                </div>
                {/* code for extra information */}
                <div className='additional-info'>
                    <p>Support local businesses &<br /> start shopping directly from<br /> sellers near you !</p>
                </div>
            </div> 
        </div>
        {/* code to create circle in background of glass and login form */}
        <div className='form-container second sign-in-container' >
            <div className='circle' >
            </div>
        </div> 
        {/* code to create right side login form */}
        <div className='glass'>
            <div className='container content'>
                <h1>Login to account</h1>
                <div>
                <p>Enter your credentials to access your account</p>
                </div>
                {/* code to create input field of user name */}
                <div className='input-field'>
                    <div className='icon'>
                    <FaRegUserCircle  />
                    </div>
                    <input type="text" className='form-control input ' value="Deepika" />
                </div>
                {/* code to create input field of email field */}
                <div className='email-field'>
                    <div className='icon'>
                    <AiOutlineMail />
                    </div>
                    <input type="text" className='form-control input ' value="design@vocalforlocal.community" />
                </div>
                {/* code to create login button  */}
                <div className='login-button'>
                    <button type="submit" className='btn loginBtn input' >Login</button>
                </div>
                {/* code to create sign up in registration  */}
                <div className='new-regi'>
                    <h5><strong>New registration?</strong> <span>Sign up</span></h5>
                </div>
            </div>
        </div> 
    </div>
    </>
  )
}

export default login