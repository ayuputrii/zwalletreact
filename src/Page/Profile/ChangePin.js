import React from "react";

import HeaderNav from '../../Components/HeaderNav';
import Image from 'react-bootstrap/Image';
// import Axios from 'axios';

import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AuthLogout } from "../../Redux/Action/Auth";


import '../../assets/css/style1.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function ChangePin() {
      let history = useHistory();
      const dispatch =  useDispatch();
      const onLogout = () => {
        dispatch(AuthLogout())
        history.replace("/login");
      };
    // const [pinConfrim, setPinConfirm] = useState("");
    //
    // const [_submit, _setSubmit] = useState("")
    // const onChangePin = (e) => {
    //   setPinConfirm(e.target.value)
    // }
    // const onSubmit = () => {
    //   _setSubmit({
    //     pinConfrim: pinConfrim,
    //   })
    // }
    // const changepin = () => {
    //   Axios.patch("http://localhost:5000/api/v1/profile", {
    //       pinConfrim: pinConfrim,
    //   })
    //   .then((response)=>{
    //     console.log(response)
    //   })
    // }
    return (
      <div className="ChangePin">
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
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 h-ChangePin">
                <form action="" method="post">
                    <div className="s-search">
                        <p className="s-rec">Change Pin</p>
                        <p className="detPI">Enter your current 6 digits Zwallet PIN below to <br/> continue to the next steps.</p>
                    </div>
                    <div className="form-row d-flex justify-content-center">
                        <div className="form-group col-1">
                            <input id="btn-border" type="text text3" className="border-gray text" />
                        </div>
                        <div className="form-group col-1">
                            <input id="btn-border" type="text text3" className="border-gray text" />
                        </div>
                        <div className="form-group col-1">
                            <input id="btn-border" type="text text3" className="border-gray text" />
                        </div>
                        <div className="form-group col-1">
                            <input id="btn-border" type="text text3" className="border-gray text" />
                        </div>
                        <div className="form-group col-1">
                            <input id="btn-border" type="text text3" className="border-gray text" />
                        </div>
                        <div className="form-group col-1">
                            <input id="btn-border" type="text text3" className="border-gray text" />
                        </div>
                    </div>
                    <div className="container d-flex justify-content-center">
                        <button type="submit" className="py-2 bg-gray">Continue</button>
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

export default ChangePin;
