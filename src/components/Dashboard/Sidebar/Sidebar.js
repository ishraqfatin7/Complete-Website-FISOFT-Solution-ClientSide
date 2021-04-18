import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul
        className="navbar-nav mr-auto flex-column vertical-nav"
        style={{ backgroundColor: "#e3f2fd", height: "100vh" }}
      > 
        <div class="list-group mt-5">
          <Link to ="/orders"
            type="button"
            class="list-group-item list-group-item-action"
            aria-current="true"
          >
           Orders
          </Link>
          <Link to ="/bookingList"type="button" class="list-group-item list-group-item-action">
            Booking List
          </Link>
          <Link to ="/review"type="button" class="list-group-item list-group-item-action">
           Review
          </Link>
          <Link to ="/dashboard/addService"type="button" class="list-group-item list-group-item-action">
           Add A Service
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
