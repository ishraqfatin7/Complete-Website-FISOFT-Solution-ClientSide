import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../../App";
import ProcessPayment from "../../Payment/ProcessPayment/ProcessPayment";
import AdminNavbar from "../../Shared/AdminNavbar/AdminNavbar";

const OrderService = () => {
  const { id } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [order, setOrder] = useState([]);
  const newCart = {...order[0]};
  console.log(newCart);
  useEffect(() => {
    fetch(`https://glacial-anchorage-43619.herokuapp.com/checkout/${id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [id]);
  const placeOrder = (paymentID) => {
    const orderDetails = {...loggedInUser,order: newCart,paymentID,status:'pending'}
    console.log(orderDetails);
    fetch('https://glacial-anchorage-43619.herokuapp.com/addBooking',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderDetails)
    })
    .then( res => res.json())
    .then(data =>{
        if(data){
            alert('Your Order Placed Successfully')
        }
    })
}
  return (
    <div>
      <AdminNavbar></AdminNavbar>
      <div className="">
        <div class="jumbotron">
          <h3 className="display-4">Hello {loggedInUser.name}, Here is your Order Details:</h3>
          <p className="lead">Please Place To Continue</p>
          <hr className="my-4" />
          {order.map((data) => (
            <div className="row">
                <div className="col-md-6">
              <div class="card mb-3 d-flex justify-content-center align-items-center">
                <img
                  src={data.imageUrl}
                  class="card-img-top w-50 h-50"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Booking Name: {data.name}</h5>
                  <p class="card-text">{data.description}</p>
                  <p class="card-text">price: ${data.price}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
                <ProcessPayment handlePayment={placeOrder}></ProcessPayment>
            </div>
            
            </div>
            
          ))}

          <p className="lead"></p>
        </div>
      </div>
    </div>
  );
};

export default OrderService;
