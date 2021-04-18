import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Navbar.css';

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light">
       
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand mb-0 h1" href="/">FISOFT</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item custom-btn">
                  <Link className="nav-link custom-btn me-5 active" to ="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-5 active" to ="/bookings">Orders</Link>
                </li>
                <li className="nav-item">
                  <Link to ="/dashboard" className="nav-link me-5 active text-brand"> Dashboard</Link>
                </li>
                <li className="nav-item">
                <Link to ="/addReview" className="nav-link me-5 active text-brand">Review</Link>
                </li>
                <li className="nav-item">
                <Link to ="/login" className="nav-link me-5 btn btn-info">{loggedInUser.email ? loggedInUser.name: 'Login'}</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Navbar;