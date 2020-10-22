import React, { useState } from "react";

// import { DateTime } from "luxon";
import HeaderNav from '../../Components/HeaderNav';
import Image from 'react-bootstrap/Image';
import {Modal, Button} from 'react-bootstrap';
import Axios from "axios"

import { logout } from "../../utils";

import { Link } from "react-router-dom";

import '../../assets/css/style1.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Confirmation(props) {
    const [redux] = useState({
      amount : props.location.state.amount,
      balance_left: props.location.state.balance_left,
      datetime: props.location.state.datetime,
      name_receiver: props.location.state.name_receiver,
      nomor_receiver: props.location.state.nomor_receiver,
      notes: props.location.state.notes
    })
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const push = () => {
      Axios.post("http://localhost:5000/api/v1/transfer",
    redux)
    }
    return (
      <div className="Confirmation">
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
                  <div className="s-search">
                      <p className="s-rec">Transfer To</p>
                  </div>
                  <div className="input-group mb-3 iconn">
                      <div className="card7 col-md-11">
                        <Link className="card-block stretched-link text-decoration-none" to="/Blank">
                          <Image className="c-Pconfirm img-fluid" alt="profile img" src={require('../../assets/img/1.png')} />
                          <p className="c-Name">Samuel Suhi</p>
                          <p className="c-No">+62 813-8492-9994</p>
                        </Link>
                      </div>
                      <div class="s-details">
                          <p class="s-det">Details</p>
                      </div>
                      <div class="card8 col-md-11">
                          <p class="c-name">Amount</p>
                          <p class="c-status">Rp{redux.amount}</p>
                      </div>
                      <div class="card8 col-md-11">
                          <p class="c-name">Ballance Left</p>
                          <p class="c-status">Rp{redux.balance_left}</p>
                      </div>
                      <div class="card8 col-md-11">
                          <p class="c-name">Date & Time</p>
                          <p class="c-status">{redux.datetime}</p>
                      </div>
                      <div class="card8 col-md-11">
                          <p class="c-name">Notes</p>
                          <p class="c-status">{redux.notes}</p>
                      </div>
                      <div class="container py-4">
                          <button onClick={(push)} class="nav justify-content-center bg-link ml-auto mt-5" id="continue" data-toggle="modal" data-target="#continues">Continue</button>
                      </div>
                      <br/><br/>
                  </div>
                  <Modal show={show} onHide={handleClose} animation={false} className="modalll">
                      <Modal.Header closeButton>
                        <Modal.Title>
                            <h5 class="heading pin" id="exampleModalCenterTitle">Enter Pin to Transfer</h5>
                          </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                               <form action="success.html">
                                   <div className="modal-body">
                                       <p className="heading pin2">Enter your 6 digits PIN for confirmation <br/> to continue transferring money.</p>
                                       <div className="form-row d-flex justify-content-center" id="modal-btn">
                                         <div className="form-group col-2">
                                             <input id="btn-border" type="text text3" className="border-primary text" />
                                         </div>
                                         <div className="form-group col-2">
                                             <input id="btn-border" type="text text3" className="border-primary text" />
                                         </div>
                                         <div className="form-group col-2">
                                             <input id="btn-border" type="text text3" className="border-primary text" />
                                         </div>
                                         <div className="form-group col-2">
                                             <input id="btn-border" type="text text3" className="border-primary text" />
                                         </div>
                                         <div className="form-group col-2">
                                             <input id="btn-border" type="text text3" className="border-primary text" />
                                         </div>
                                         <div className="form-group col-2">
                                             <input id="btn-border" type="text text3" className="border-primary text" />
                                         </div>
                                       </div>
                                   </div>
                               </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                  </Modal>
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

export default Confirmation;
