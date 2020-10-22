import React, { useState, useEffect } from "react";

import HeaderNav from '../Components/HeaderNav';
import Image from 'react-bootstrap/Image';
import Axios from 'axios';
import { logout } from "../../utils";

import { Link } from "react-router-dom";

import '../assets/css/style1.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const SearchReceiver = () => {
  const [query, setQuery] = React.useState("");
  const [_state, _setState] = useState({
    transfer: []
  })
  const [state, setState] = useState({search: ''})
  const handleOnChange = (e) => {
    setState({search: e.target.value})
  }
  useEffect(()=> {
    const url = 'http://localhost:5000/api/v1/transfer'
    Axios.get(url)
    .then(transfer =>{
      // console.log(transfer)
    _setState({
        transfer: transfer.data.data
      })
    })
  },[])
  let libData = []
  const searchKey = state.search.trim().toLowerCase();
  if(searchKey && searchKey.length > 0) {
    libData = _state.transfer.filter(i => {
      return i.name_receiver.toLowerCase().match(searchKey)
    })
  }
  return (
    <div className="SearchReceiver">
      <HeaderNav title = "Zwallet"/>
      <div className="container">
        <div className="row">
            <nav className="col-xs-12 col-sm-12 col-md-4 col-lg-3 d-home">
                <div className="h-home dashboard">
                    <Image className="h-prof img-fluid" src={require('../assets/img/grid.png')} />
                    <Link to="/Dashboard" className="h-dashboard">
                      Dashboard
                    </Link>
                </div>
                <div className="h-home active">
                    <Image className="h-arrow img-fluid" src={require('../assets/img/arrow-up.png')} />
                    <Link className="h-active" to="/SearchReceiver"> Transfer </Link>
                </div>
                <div className="h-home">
                    <Image className="h-prof img-fluid" src={require('../assets/img/plus.png')} />
                    <Link to="/Topup" className="h-dashboard">
                      Topup
                    </Link>
                </div>
                <div className="h-home">
                    <Image className="h-prof img-fluid" src={require('../assets/img/user.png')} />
                    <Link to="/Profile" className="h-dashboard">
                      Profile
                    </Link>
                </div>
                <div className="h-homee">
                    <Image className="h-prof img-fluid" src={require('../assets/img/log-out.png')} />
                    <Link onClick={logout} className="h-dashboard">
                      Logout
                    </Link>
                </div>
            </nav>

            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 d-AllSearch">
                <div className="s-search">
                    <p className="s-rec">Search Receiver</p>
                </div>
                <div className="input-group mb-3 iconn">
                  <input type="text" value={state.search} onChange={(e) => handleOnChange((e))} className="form-control pl-5 py-4" id="input-search" placeholder="Search receiver here" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                </div>
                {libData.map((item, index) => {
                  return(
                    <div className="input-group mb-3" key={index}>
                      <div className="card2 col-md-11">
                        <Link className="card-block stretched-link text-decoration-none" to="/Amount">
                          <Image className="h-img-search img-fluid" alt="profile img" src={require('../assets/img/1.png')} />
                          <p className="h-name-search">{item.name_receiver}</p>
                          <p className="h-status-search">+62 {item.nomor_receiver}</p>
                        </Link>
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

export default SearchReceiver;
