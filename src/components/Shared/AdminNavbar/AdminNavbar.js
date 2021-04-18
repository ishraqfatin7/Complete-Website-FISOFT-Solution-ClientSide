import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const AdminNavbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(()=>{
        fetch('https://glacial-anchorage-43619.herokuapp.com/isAdmin',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email:loggedInUser.email})
            

        },[])
        .then(res => res.json())
            .then( data => setIsAdmin(data))
    })
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item px-5">
                <Link to="/home" class="nav-link active">
                  Home
                </Link>
              </li>
              <li class="nav-item px-5">
                <Link to="/bookings" class="nav-link active">
                 Your Booking List
                </Link>
              </li>
              <li class="nav-item px-5">
                <Link to="/addReview" class="nav-link active">
                  Review
                </Link>
              </li>
             {
                isAdmin && <ul>
                     <li class="nav-item px-5">
                <Link to="/orders" class="nav-link active">
                  Manage Orders
                </Link>
              </li>
              <li class="nav-item px-5">
                <Link to="/addService" class="nav-link active">
                  Add Service
                </Link>
              </li>
              <li class="nav-item px-5">
                <Link to="/makeAdmin" class="nav-link active">
                  Make Admin
                </Link>
              </li>
              <li class="nav-item px-5">
                <Link to="/manageService" class="nav-link active">
                  Manage Service
                </Link>
              </li>
              
                </ul>
             }
             <li class="nav-item">
                <Link to ="/login" className="nav-link me-5 btn btn-info">{loggedInUser.email ? loggedInUser.name: 'Login'}</Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminNavbar;
