import React, { useState } from 'react';

import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import Axios from 'axios';
import '../../assets/css/style.css';

function Register() {
    const [usernameReg, setUsernameReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [_submit, _setSubmit] = useState("")
    const onChangeUsernameReg = (e) => {
      setUsernameReg(e.target.value)
    }
    const onChangeEmailReg = (e) => {
      setEmailReg(e.target.value)
    }
    const onChangePasswordReg = (e) => {
      setPasswordReg(e.target.value)
    }
    const onSubmit = () => {
      _setSubmit({
        usernameReg: usernameReg,
        emailReg: emailReg,
        passwordReg: passwordReg
      })
    }
    const register = () => {
      Axios.post("http://localhost:5000/api/v1/auth/register", {
        username:usernameReg,
        email: emailReg,
        password: passwordReg
      })
      .then((response)=>{
        console.log(response)
      })
    }
    return(
      <div className="Register">
      <section id="logo" className="logo">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-7 col-md-12 col-sm-3 text-white">
                    <h3 className="mt-5 ml-5 pl-5">Zwallet</h3>
                    <Image className="col-sm-6 col-lg-10 d-flex justify-content-center" src={require('../../assets/img/Group 57.png')} />
                    <h5 className="mt-4 ml-5 mr-5 pl-4">App that Covering Banking Needs.</h5>
                    <p className="mt-4 ml-5 mr-5 pl-4">
                      <div>Zwallet is an application that focussing in banking needs for all
                        users <br/> in the world. Always updated and always following world trends. <br/> 5000+ users
                        registered in Zwallet everyday with worldwide <br/> users coverage.
                      </div>
                    </p>
                </div>
                <div className="col-lg-5 pl-5 bg-white">
                    <p className="col col-7 col-lg-11 col-md-3">Start Accessing Banking Needs <br/> With All Devices and All <br/>  Platforms With 30.000+ Users</p>
                    <p className="col1 col-9">
                        <small>Transfering money is eassier than ever, you can access
                          <br/> Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for
                          you!
                        </small>
                    </p>
                    <form onSubmit={onSubmit}>
                    <div className="form-group col-md-9">
                        <input type="text" onChange={onChangeUsernameReg} className="form-control" placeholder="Enter your username" />
                    </div>
                    <div className="form-group col-md-9">
                        <input type="text" onChange={onChangeEmailReg} className="form-control" placeholder="Enter your e-mail" />
                    </div>
                    <div className="form-group col-md-9 py-1">
                        <input type="password" onChange={onChangePasswordReg} className="form-control" placeholder="Create your password" />
                    </div>
                    {
                      usernameReg !== "" && emailReg !== "" && passwordReg !== ""
                        ? <button type="submit" onClick={register} className="btn col-md-8 py-2 text-secondary" style={{left: "22px", background: "#DADADA"}}><Link to="/login">Sign Up</Link></button>
                        // ?  <button type="submit" onClick={onSubmit} className="btn col-md-8 py-2 text-secondary" style={{left: "22px", background: "#DADADA"}}>Sign Up</button>
                      : <button className="btn col-md-8 py-2 text-secondary" style={{left: "22px", background: "#DADADA"}} disabled>Sign Up</button>
                    }
                    </form>
                    <smalll className="form-text text-center text-muted col-10 col-md-10 col-sm-8 col-xs-2" style={{right: "16px"}}>You have an account? Let’s
                        <Link to="/Login" className="text-primary">Sign In</Link>
                    </smalll>
                </div>
            </div>
        </div>
      </section>
      </div>
    )
}

export default Register;
