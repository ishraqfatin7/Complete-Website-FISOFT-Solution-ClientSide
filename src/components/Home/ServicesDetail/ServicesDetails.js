import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import './ServicesDetails.css';
const ServicesDetails = (props) => {
    const {_id,name,imageUrl,description,price} = props.services;
    const history = useHistory();
    const location = useLocation();
    
    const handleClick = (id) =>{
        const url = `checkout/${id}`;
        history.push(url);
        const { from } = location.state || { from: { pathname: `/${url}` } };
        history.replace(from);
    }
    
  return (
    <div className="col-md-3 offset-md-1">
      <div className="card text-center shadow rounded" style={{width: '20rem'}}>
        <div className="card-body h-100">
        <img className="rounded img-fluid mx-auto d-block mt-5 w-50" src={imageUrl} alt="..." />
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
           {description}
          </p>
          <p>Price: ${price}</p>
          <button as={Link} to ="/orders" className="btn btn-primary" onClick={() => handleClick(_id)}>Order Service</button>

        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
