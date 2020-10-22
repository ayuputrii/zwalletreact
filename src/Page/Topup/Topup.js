import React from "react";

import HeaderNav from '../../Components/HeaderNav';
import Image from 'react-bootstrap/Image';

import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthLogout } from "../../Redux/Action/Auth";
import { GetTopup } from "../../Redux/Action/Users";


import '../../assets/css/style1.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Topup = () => {
  const history = useHistory();
  const dispatch =  useDispatch();

  const {data} = useSelector((s)=> s.Users)
  const Auth = useSelector((s)=> s.Auth)

  React.useEffect(() => {
    dispatch(GetTopup({
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
      <div className="Topup">
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
                  <div className="h-home active">
                      <Image className="h-plus img-fluid" src={require('../../assets/img/plus.png')} />
                      <Link className="h-active" to="/Topup"> Topup </Link>
                  </div>
                  <div className="h-home">
                      <Image className="h-prof img-fluid" src={require('../../assets/img/user.png')} />
                      <Link to="/Profile" className="h-dashboard">
                        Profile
                      </Link>
                  </div>
                  <div className="h-homee">
                      <Image className="h-prof img-fluid" src={require('../../assets/img/log-out.png')} />
                      <Link onClick={() => onLogout()} className="h-dashboard">
                        Logout
                      </Link>
                  </div>
              </nav>
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 d-AllSearch">
                  <div className="s-search">
                      <p className="s-rec">How To Top Up</p>
                  </div>
                  {data.map((item) => {
                  return(
                    <div className="input-group mb-3">
                        <div className="card2 col-md-11">
                          <div>
                            <p className="h-numberr"><br/>{item.id_topup} <h7 class="texttop" style={{color: "#7A7886", margin:"10px"}}>{item.howto_topup}</h7></p>
                          </div>
                        </div>
                    </div>
                  )
                  })}
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

export default Topup;
