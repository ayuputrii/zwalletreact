import React from "react";

import HeaderNav from '../../Components/HeaderNav';
import Image from 'react-bootstrap/Image';

import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AuthLogout } from "../../Redux/Action/Auth";

import '../../assets/css/style1.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const ChangePassword = () =>  {
    let history = useHistory();
    const dispatch =  useDispatch();
    const onLogout = () => {
      dispatch(AuthLogout())
      history.replace("/login");
    };
    return (
      <div className="ChangePassword">
        <HeaderNav title = "Zwallet"/>
        <div className="container">
          <div className="row">
              <nav className="col-xs-12 col-sm-12 col-md-4 col-lg-3 d-change">
                  <div className="h-home dashboard">
                      <Image className="h-prof img-fluid" src={require('../../assets/img/grid.png')} />
                      <Link to="/Dashboard" className="h-dashboard">
                        Dashboard
                      </Link>
                  </div>
                  <div className="h-home">
                      <Image className="h-prof img-fluid" src={require('../../assets/img/arrow-up.png')} />
                      <Link to="/SearchReceiver" className="h-dashboard">
                        Transfer
                      </Link>
                  </div>
                  <div className="h-home">
                      <Image className="h-prof img-fluid" src={require('../../assets/img/plus.png')} />
                      <Link to="/Topup" className="h-dashboard">
                        Top Up
                      </Link>
                  </div>
                  <div className="h-home active">
                      <Image className="h-profile img-fluid" src={require('../../assets/img/user.png')} />
                      <Link  className="h-active" to="/Profile"> Profile </Link>
                  </div>
                  <div className="h-homee">
                      <Image className="h-prof img-fluid" src={require('../../assets/img/log-out.png')} />
                      <Link onClick={() => onLogout()} className="h-dashboard">
                        Logout
                      </Link>
                  </div>
              </nav>
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 h-ChangePassword">
                <form action="" method="post">
                    <div className="s-search">
                        <p className="s-rec">Change Password</p>
                        <p className="detPI">You must enter your current password and then <br/> type your new password twice. </p>
                    </div>
                    <div className="container py-4">
                        <input type="password" id="lock" placeholder="Current Password" />
                    </div>
                    <div className="container py-4">
                        <input type="password" id="lock" placeholder="New Password" />
                    </div>
                    <div className="container py-4">
                        <input type="password" id="lock" placeholder="Repeat New Password" />
                    </div>
                    <div className="container d-flex justify-content-center">
                        <button  type="submit" className="py-2 bg-gray">Change Password</button>
                    </div>
                </form>
              </div>
          </div>
        </div>
        <footer>
            <div className="footer-container">
                <nav className="navbar navbar mt-3" id="footer-bar">
                    <p className="nav-link" id="reserved">
                        2020 Zwallet. All right reserved.
                    </p>
                    <p className="nav-link ml-auto contact1 bottom-footer contact1">
                        +62 5637 8882 9901
                    </p>
                    <p className="nav-link contact1 bottom-footer contact1">
                        contact@zwallet.com
                    </p>
                </nav>
            </div>
        </footer>
      </div>
    )
}

export default ChangePassword;
