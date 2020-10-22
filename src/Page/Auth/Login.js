import React from 'react';

import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

import '../../assets/css/style.css';

import { useDispatch } from "react-redux";
import { AuthLogin } from "../../Redux/Action/Auth";
// import { isLogin } from "../../utils";
// import { login } from "../../utils";

const Login = (props) => {
    console.log(props, 'ahha')
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useDispatch();

    const onSubmit = (e) => {
     e.preventDefault(e);
     dispatch(
       AuthLogin({
         email: email,
         password: password,
         history: props.history
       })
     );
    };
    return(
      <div className="Login">
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
                    <form onSubmit={(e) => onSubmit(e)}>
                      <div className="form-group col-md-9 py-2">
                          <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your e-mail" />
                      </div>
                      <div className="form-group col-md-9 py-2">
                          <input type="password" className="form-control d-flex justify-content-between"  onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                          <small id="emailHelp" className="form-text text-right text-muted justify-content-center">Forgot Password?</small>
                      </div>
                      {
                        email !== "" && password !== ""
                          ? <button type="submit" onClick={(e)=>onSubmit(e)} className="btn col-md-8 py-2 text-secondary" style={{left: "22px", background: "#DADADA"}}>Sign In</button>
                          // ?  <button type="submit" onClick={onSubmit} className="btn col-md-8 py-2 text-secondary" style={{left: "22px", background: "#DADADA"}}>Sign Up</button>
                        : <button className="btn col-md-8 py-2 text-secondary" style={{left: "22px", background: "#DADADA"}} disabled={true}>Sign In</button>
                      }
                    </form>
                    <small className="form-text text-center text-muted col-10 col-md-10 col-sm-8 col-xs-2" style={{right: "16px"}}>Don’t have an account? Let’s
                        <Link to="/register" className="text-primary"> Sign Up</Link>
                    </small>
                </div>
            </div>
        </div>
      </section>
      </div>
    )
}

export default Login;
