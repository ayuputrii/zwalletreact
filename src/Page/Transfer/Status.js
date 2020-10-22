import React, { useState, useEffect } from "react";

import HeaderNav from '../../Components/HeaderNav';
import Image from 'react-bootstrap/Image';
import Axios from 'axios';
import { logout } from "../../utils";

import { Link } from "react-router-dom";

import '../../assets/css/style1.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Status = () => {
  const [setState] = useState({
    profile: []
  })

  useEffect(()=> {
    const url = 'http://localhost:5000/api/v1/profile'
    Axios.get(url)
    .then(profile =>{
      console.log(profile)
      setState({
        profile: profile.data.data
      })
    })
  },[])
    return (
      <div className="Status">
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
                      <Link onClick={logout} className="h-dashboard">
                        Logout
                      </Link>
                  </div>
              </nav>
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 d-AllSearch">
                <div className="nav justify-content-center py-5">
                    <Image src={require('../../assets/img/success.png')} />
                </div>
                <h3 id="success" className="nav justify-content-center pb-5"> Transaction Success </h3>
                  <div className="input-group mb-3">
                      <div className="card8 col-md-11">
                          <p className="c-name">Amount</p>
                          <p className="c-status">Rp100.000</p>
                      </div>
                      <div className="card8 col-md-11">
                          <p className="c-name">Ballance Left</p>
                          <p className="c-status">Rp20.000</p>
                      </div>
                      <div className="card8 col-md-11">
                          <p className="c-name">Date & Time</p>
                          <p className="c-status">May 11, 2020 - 12.20</p>
                      </div>
                      <div className="card8 col-md-11">
                          <p className="c-name">Notes</p>
                          <p className="c-status">For buying some socks</p>
                      </div>
                      <div className="s-search">
                          <p className="s-rec">Transfer To</p>
                      </div>
                      <div className="card7 col-md-11">
                        <Link className="card-block stretched-link text-decoration-none" to="/Blank">
                          <Image className="c-Pconfirm img-fluid" alt="profile img" src={require('../../assets/img/1.png')} />
                          <p className="c-Name">Samuel Suhi</p>
                          <p className="c-No">+62 813-8492-9994</p>
                        </Link>
                      </div>
                      <div className="col-md-11 py-4">
                          <Link className="btn btn-primary float-right" id="backTo" to="/Dashboard">Back to Home</Link>
                          <button className="btn btn-secondary hidden-print" id="backTo2" style={{float: "right"}} onclick="myFunction()">
                              <Image src={require('../../assets/img/icon-downlod.png')} />
                              <span className="glyphicon glyphicon-print" aria-hidden="true" id="pdf">
                              </span> Download PDF
                          </button>
                          <button data-toggle="modal" data-target="#share" className="btn btn-secondary hidden-print float-right" id="backTo3">
                              <Image src={require('../../assets/img/share.png')} />
                          </button>
                      </div>
                      <br/><br/>
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

export default Status;
