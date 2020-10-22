import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { GetUsers, DeleteUsers} from "../../../Redux/Action/Users"

import HeaderNav from '../../../Components/HeaderNav';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import { AuthLogout } from "../../../Redux/Action/Auth";

import '../../../assets/css/style1.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const AdminUser = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const {data} = useSelector((s) => s.Users)
    const Auth = useSelector((s) => s.Auth)

    useEffect(() => {
      dispatch(GetUsers({
        page: 1,
        limit: 5,
        token: Auth.data.token
      }))
    }, [])

    const onDelete = (id_profile) => {
      dispatch(DeleteUsers({
        id_profile: id_profile,
        token: Auth.data.token
      }))
      dispatch(GetUsers({
        page: 1,
        limit: 5,
        token: Auth.data.token
      }))
    }

  const onLogout = () => {
    dispatch(AuthLogout())
    history.replace("/Login");
  };
    return(
      <div className="AdminUser">
        <HeaderNav title = "Zwallet"/>
        <div className="container">
          <div className="row">
              <nav className="col-xs-12 col-sm-12 col-md-4 col-lg-3 d-home">
                  <div className="h-home dashboard">
                      <Image className="h-prof img-fluid" src={require('../../../assets/img/grid.png')} />
                      <Link to="/Dashboard" className="h-dashboard">
                        Dashboard Admin
                      </Link>
                  </div>
                  <div className="h-home active">
                      <Image className="h-arrow img-fluid" src={require('../../../assets/img/arrow-up.png')} />
                      <Link className="h-active" to="/Admin"> Data User </Link>
                  </div>
                  <div className="h-homee">
                      <Image className="h-prof img-fluid" src={require('../../../assets/img/log-out.png')} />
                      <Link  onClick={() => onLogout()} className="h-dashboard">
                        Logout
                      </Link>
                  </div>
              </nav>

              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 d-AllSearch">
                  <div className="s-search">
                      <p className="s-rec">Data Admin</p>
                  </div>
                  {data.map((item, index) => {
                  return(
                      <div className="input-group mb-3">
                        <div className="card2 col-md-11">
                          <p className="h-name-search">{item.username}</p>
                          <p className="h-name-search">{item.phone}</p>
                          <button onClick={()=> {
                            props.history.push({
                              pathname: "/Admin/edit",
                              data: item.username
                            })
                              }}>edit</button>
                              <button onClick={()=> onDelete(item.id_profile)}>delete</button>
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

export default AdminUser
