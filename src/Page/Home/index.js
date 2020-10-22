import React, {useEffect} from "react";

import HeaderNav from '../../Components/HeaderNav';

import Image from 'react-bootstrap/Image';

import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthLogout } from "../../Redux/Action/Auth";
import { GetTransfer } from "../../Redux/Action/Users";

import '../../assets/css/style1.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Dashboard  = (props) => {
    const history = useHistory();
    const dispatch =  useDispatch();

    const {data} = useSelector((s)=> s.Users)
    const Auth = useSelector((s)=> s.Auth)

    useEffect(() => {
      dispatch(GetTransfer({
       page: 1,
       limit: 1,
       token: Auth.data.token
      }))
    }, []);

    const onLogout = () => {
      dispatch(AuthLogout())
      history.replace("/login");
    };
    return (
      <div className="Dashboard">
        <HeaderNav title = "Zwallet"/>
        <div className="container">
          <div className="row">
              <nav className="col-xs-12 col-sm-12 col-md-4 col-lg-3 d-home">
                  <div className="h-home dashboard active">
                      <Image className="h-profile img-fluid" src={require('../../assets/img/grid.png')} />
                      <Link className="h-active" to="/Dashboard"> Dashboard </Link>
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
                      <Link  onClick={() => onLogout()} className="h-dashboard">
                        Logout
                      </Link>
                  </div>
              </nav>
              <div className="col-lg-8">
                    <div className="shadow-sm bg-home">
                        <div className="col-xs-12 col-sm-6 col-md-6 aa">
                            <div className="his-parap">Balance</div>
                            <h3 className="his-money">Rp.{data.amount}</h3>
                            <div className="his-phone">+ {data.nomor_receiver}</div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 bg-button">
                            <Link to="/SearchReceiver" className="his-top-button">
                                <Image className="transfer" src={require('../../assets/img/arrow-upp.png')} />Transfer
                            </Link>
                            <Link to="/Topup" className="his-top-button">
                                <Image className="topup" src={require('../../assets/img/plus.png')} />Top Up
                            </Link>
                        </div>
                    </div>
                    <div className="mt-3 row">
                        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6">
                            <div className="shadow-sm">
                                <div className="his-middle-one">
                                    <div className="income">
                                        <Image src={require('../../assets/img/arrow-down.png')} />
                                        <p className="parap-income">Income</p>
                                        <p className="money-income">Rp.2.120.000</p>
                                    </div>
                                    <div className="expense">
                                        <Image src={require('../../assets/img/arrow-upp.png')} />
                                        <p className="parap-income">Expense</p>
                                        <p className="money-income">Rp.1.560.000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-6">
                          <div className="shadow-sm">
                              <div className="his-middle-two">
                                  <p className="transaction-his">Transaction History</p>
                                  <Link className="see-all" to="/Transaction">See all</Link>
                                  {data.map((item) => {
                                  return(
                                    <div className="h-tran-data">
                                        <Image className="h-imgH img-fluid" alt="profile img" src={require('../../assets/img/1.png')} />
                                        <div className="h-status-money3">
                                            <p className="h-money.data1">+{item.amount}</p>
                                        </div>
                                        <p className="name-home">{item.name_receiver}</p>
                                        <p className="status-data">{item.notes}</p>
                                    </div>
                                  )})}
                                  {data.map((item) => {
                                  return(
                                    <div className="h-tran-data">
                                        <Image className="h-imgH img-fluid" src={require('../../assets/img/logo1.png')} />
                                        <div className="h-status-money4">
                                            <p className="h-money.data2">-{item.amount}</p>
                                        </div>
                                        <p className="name-home">{item.name_receiver}</p>
                                        <p className="status-data">{item.notes}</p>
                                    </div>
                                  )})}
                              </div>
                          </div>
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

export default Dashboard;
