import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import AdminNavbar from "../../Shared/AdminNavbar/AdminNavbar";
import UserBookingList from "./UserBookingList/UserBookingList";

const BookingsByUser = () => {
  const [bookingsUser, setBookingsUser] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch("https://glacial-anchorage-43619.herokuapp.com/ordersByUser", {
      method: "POST",
      headers: { "content-type": "application/json" ,
      authorization: `Bearer ${sessionStorage.getItem('token')}`     
    },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setBookingsUser(data));
  }, [loggedInUser.email]);
  return (
    <section>
      <div className="">
        <AdminNavbar></AdminNavbar>
      </div>
      <div className="">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th className="text-secondary" scope="col">
                Customer Name
              </th>
              <th className="text-secondary" scope="col">
                Email
              </th>
              <th className="text-secondary" scope="col">
                Order Name
              </th>
              <th className="text-secondary" scope="col">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            
            {bookingsUser.map((userBookings) => (
              <UserBookingList bookingsList={userBookings}></UserBookingList>
            ))}
        
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BookingsByUser;
