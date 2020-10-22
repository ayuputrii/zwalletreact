import React from "react";

import HeaderNav from '../../Components/HeaderNav';
import Image from 'react-bootstrap/Image';
import { logout } from "../../utils";

import { Link } from "react-router-dom";

import '../../assets/css/style1.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Amount = () => {
  return (
    <div className="Amount">
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
              <div className="h-home active">
                  <Image className="h-arrow img-fluid" src={require('../../assets/img/arrow-up.png')} />
                  <Link className="h-active" to="/SearchReceiver"> Transfer </Link>
              </div>
              <div className="h-home">
                  <Image className="h-prof img-fluid" src={require('../../assets/img/plus.png')} />
                  <Link to="/Topup" className="h-dashboard">
                    Topup
                  </Link>
              </div>
              <div className="h-home">
                  <Image className="h-prof img-fluid" src={require('../../assets/img/user.png')} />
                  <Link to="/Profile" className="h-dashboard">
                    Profile
                  </Link>
              </div>
              <div className="h-homee">
                  <Image className="h-prof img-fluid" src={require('../../assets/img/log-out.png')} />
                  <Link onClick={logout} className="h-dashboard">
                    Logout
                  </Link>
              </div>
          </nav>
          <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 d-AllSearch">
            <form>
                <div className="h-tmoney">
                    <p className="transfer-money">Transfer Money</p>
                </div>
                    <div className="col-md-11 card-tf">
                        <img className="h-img-search img-fluid" alt="profile img" src={require('../../assets/img/1.png')} />
                        <p className="h-name-search"></p>
                        <p className="h-status-search"></p>
                    </div>
                <div className="container">
                    <p id="type">
                      Type the amount you want to transfer and then<br /> press continue to the next steps
                    </p>
                </div>
                <div className="container">
                    <input type="text text1" name="amount" id="amount" placeholder="0.00" />
                </div>
                <div className="table table-borderless table-responsive mx-auto d-flex justify-content-center">
                    <div>
                      <div>
                        <p><b> Rp120.000 Available</b></p>
                      </div>
                    </div>
                </div>
                <div className="container">
                    <input type="text" id="note" name="notes" placeholder="Add some notes" />
                </div>
                <div className="container py-4">
                    <Link to="/Confirmation" className="nav justify-content-center bg-link ml-auto mt-5" id="continue">Continue</Link>
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

export default Amount;
