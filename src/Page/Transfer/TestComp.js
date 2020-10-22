import React from "react"
import {Link} from "react-router-dom";
import Image from "react-bootstrap/Image";

const TestComp = (props) => {
  return(
    <div className="input-group mb-3">
      <div className="card2 col-md-11">
        <Link className="card-block stretched-link text-decoration-none" to={{pathname: '/Amount', state: props.data}}>
          <Image className="h-img-search img-fluid" alt="profile img" src={require('../../assets/img/1.png')} />
          <p className="h-name-search">{props.data.name_receiver}</p>
          <p className="h-status-search">+62 {props.data.nomor_receiver}</p>
        </Link>
      </div>
    </div>
  )
}
export default TestComp
