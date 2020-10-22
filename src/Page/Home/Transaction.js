import React, { useEffect } from "react";

import HeaderNav from '../../Components/HeaderNav';
import Image from 'react-bootstrap/Image';

import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthLogout } from "../../Redux/Action/Auth";
import { GetTransfer } from "../../Redux/Action/Users";

import '../../assets/css/style1.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Transaction = (props) => {
    const history = useHistory();
    const dispatch =  useDispatch();

    const {data} = useSelector((s)=> s.Users)
    const Auth = useSelector((s)=> s.Auth)

    useEffect(() => {
      dispatch(GetTransfer({
       page: 1,
       limit: 2,
       token: Auth.data.token
      }))
    }, []);

    const onLogout = () => {
      dispatch(AuthLogout())
      history.replace("/login");
    };
    return(
      <div className="Transaction">
        <HeaderNav title = "Zwallet"/>
        <div className="container">
          <div className="row">
              <nav className="col-xs-12 col-sm-12 col-md-4 col-lg-3 d-home">
                  <div className="h-home dashboard active">
                      <Image className="h-profile img-fluid" src={require('../../assets/img/grid.png')} />
                      <Link to="/Dashboard" className="h-active">
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
                  <div className="h-home">
                      <Image className="h-prof img-fluid" src={require('../../assets/img/user.png')} />
                      <Link to="/Topup" className="h-dashboard">
                        Profie
                      </Link>
                  </div>
                  <div className="h-homee">
                      <Image className="h-prof img-fluid" src={require('../../assets/img/log-out.png')} />
                      <Link  onClick={() => onLogout()} className="h-dashboard">
                        Logout
                      </Link>
                  </div>
              </nav>
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 d-AllSearch">
                <div className="s-search">
                    <p className="s-rec">Transaction History</p>
                    <p className="s-week">This Week</p>
                    {data.map((item) => {
                      return(
                        <div className="input-group mb-3">
                            <div className="col-md-11">
                              <Link className="card-block stretched-link text-decoration-none" to="/Amount">
                                <Image className="h-img-search img-fluid" alt="profile img" src={require('../../assets/img/1.png')} />
                                <div class="h-money13">
                                   <p class="h-dmoney13">+ {item.amount}</p>
                                </div>
                                <p className="h-name-search">{item.name_receiver}</p>
                                <p className="h-status-search">{item.notes}</p>
                              </Link>
                            </div>
                        </div>
                      )
                    })}
                    <p className="s-week">This Month</p>
                    {data.map((item) => {
                      return(
                        <div className="input-group mb-3">
                            <div className="col-md-11">
                              <Link className="card-block stretched-link text-decoration-none" to="/Amount">
                                <Image className="h-img-search img-fluid" alt="profile img" src={require('../../assets/img/1.png')} />
                                <div class="h-money24">
                                   <p class="h-dmoney24">- {item.amount}</p>
                                </div>
                                <p className="h-name-search">{item.name_receiver}</p>
                                <p className="h-status-search">{item.notes}</p>
                              </Link>
                            </div>
                        </div>
                      )
                    })}
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

export default Transaction
