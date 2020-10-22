import React from "react";

import HeaderNav from '../../Components/HeaderNav';
import Image from 'react-bootstrap/Image';

import { Link, useHistory } from "react-router-dom";
import { useDispatch} from "react-redux";
import { AuthLogout } from "../../Redux/Action/Auth";

import '../../assets/css/style1.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
    let history = useHistory();
    const dispatch =  useDispatch();
    const onLogout = () => {
      dispatch(AuthLogout())
      history.replace("/login");
    };
    return (
      <div className="Profile">
        <HeaderNav title = "Zwallet"/>
        <div className="container">
          <div className="row">
              <nav className="col-xs-12 col-sm-12 col-md-4 col-lg-3 d-home">
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
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 d-AllSearch">
                <div className="nav r25 py-4">
                    <Image src={require('../../assets/img/Rectangle 25.png')} />
                </div>
                <div className="nav">
                  <Link className="editt">
                    <Image src={require('../../assets/img/pen.png')} /> Edit
                  </Link>
                </div>
                <div className="col-md-11">
                    <p className="nsamuel">Samuel Suhi</p>
                    <p className="nnumber">+62 813-8492-9994</p>
                </div>
                <div className="card4 col-md-6">
                    <Link className="card-block stretched-link text-decoration-none" to="/PersonalInformation"></Link>
                    <p>Personal Information</p>
                </div>
                <div className="card4 col-md-6">
                    <Link className="card-block stretched-link text-decoration-none" to="/ChangePassword"></Link>
                    <p>Change Password</p>
                </div>
                <div className="card4 col-md-6">
                    <Link className="card-block stretched-link text-decoration-none" to="/ChangePin"></Link>
                    <p>Change Pin</p>
                </div>
                <div className="card5 col-md-6">
                    <Link onClick={() => onLogout()} className="card-block stretched-link text-decoration-none"></Link>
                    <p>Logout</p>
                </div>
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

export default Profile;
