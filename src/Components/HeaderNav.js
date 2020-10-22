import React, { useEffect } from 'react';
import Image from 'react-bootstrap/Image';

import { GetUsers } from "../Redux/Action/Users";
import { useDispatch, useSelector } from "react-redux";

import '../assets/css/style1.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const HeaderNav = (props) => {
    const dispatch = useDispatch()

    const {data } = useSelector((s)=> s.Users)
    const Auth = useSelector((s)=> s.Auth)

    useEffect(() => {
      dispatch(GetUsers({
       page: 1,
       limit: 1,
       token: Auth.data.token
      }))
    }, []);

    return(
        <div className={`header-nav`}>
        <div className="container navbar">
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-12 col-lg-6">
                    <p className="h-zwallet">Zwallet</p>
                </div>
            </div>
            <div className="">
                <Image src={require('../assets/img/Rectangle 25.png')} className="rounded float-left h-img-nav h-nav-right" />
                    <div className="h-nav-bell h-nav-right">
                        <Image src={require('../assets/img/bell1.png')} className="img-fluid" alt="Icon Notification" />
                    </div>
                    <div className="h-name h-nav-right">
                        <p className="name">{data[0].username}</p>
                        <p className="no">{data[0].role_id}</p>
                    </div>
            </div>
        </div>
      </div>
    )
}

export default HeaderNav;
