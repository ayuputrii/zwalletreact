import React from "react";

import HeaderNav from '../../Components/HeaderNav';
import Image from 'react-bootstrap/Image';
import Axios from 'axios';
import { GetUsers } from "../../Redux/Action/Users";

import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { AuthLogout } from "../../Redux/Action/Auth";

import { Link } from "react-router-dom";

import '../../assets/css/style1.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const PersonalInformation = () => {
  const dispatch = useDispatch();
  const history = useHistory()

  const {data, error} = useSelector((s)=> s.Users)
  const Auth = useSelector((s)=> s.Auth)

  React.useEffect(() => {
    dispatch(GetUsers({
     page: 1,
     limit: 1,
     token: Auth.data.token
    }))
  }, []);

    const onLogout = () => {
      dispatch(AuthLogout())
      history.replace("/Login");
    };

    return (
      <div className="PersonalInformation">
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
                      <Link  onClick={() => onLogout()} className="h-dashboard">
                        Logout
                      </Link>
                  </div>
              </nav>
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 d-Personal">
                  <div className="s-search">
                      <p className="s-rec">Personal Information</p>
                      <p className="detPI">We got your personal information from the sign <br/> up proccess. If you want to make changes on <br/> your information, contact our support. </p>
                  </div>
                  <div className="input-group mb-3">
                      <div className="cardP col-md-11">
                          <p className="h-personal">First Name</p>
                          <p className="h-pname">{data[0].first_name}</p>
                      </div>
                      <div className="cardP col-md-11">
                          <p className="h-personal">Last Name</p>
                          <p className="h-pname">{data[0].last_name}</p>
                      </div>
                      <div className="cardP col-md-11">
                          <p className="h-personal">Verified E-mail</p>
                          <p className="h-pname">{data[0].email}</p>
                      </div>
                      <div className="cardP col-md-11">
                          <p className="h-personal">Phone Number</p>
                          <Link to="/Manage" className="managePhone">Manage</Link>
                          <p className="h-pname">{data[0].phone}</p>
                      </div>
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

export default PersonalInformation;
