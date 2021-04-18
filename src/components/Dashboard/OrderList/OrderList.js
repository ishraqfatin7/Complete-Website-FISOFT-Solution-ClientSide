import React, { useEffect, useState } from 'react';
import AdminNavbar from '../../Shared/AdminNavbar/AdminNavbar';

const OrderList = () => {
    const [orderList, setOrderList] = useState([]);
    
    useEffect(() =>{
        fetch('https://glacial-anchorage-43619.herokuapp.com/bookings')
        .then((res) => res.json())
        .then((data) => setOrderList(data));
    },[]);
    const updateStatus = (orderId,statusId) =>{
        const currentStatus = {status: statusId }
        console.log('update clicked',statusId);
        fetch(`https://glacial-anchorage-43619.herokuapp.com/${orderId}`,{
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(currentStatus)
        })
        .then((res) => res.json())
        .then((data) => {
          if(data){
              alert('Order Status Changed Successfuly. Reload To see Changes')
          }
      })
    }
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
              <th className="text-secondary" scope="col">
                Change Order Status
              </th>
            </tr>
          </thead>
          <tbody>
            
            {orderList.map((order) => (
            <tr>
              <td>
                  {order.name}
              </td>
              <td>
                  {order.email}
              </td>
              <td>
                  {order.order.name}
              </td>
              <td className="text-info">
                  {order.status} 
                  <br/>
                  
              </td>
              <td>
              <p onClick={()=> updateStatus(order._id,'Done')} className="btn btn-primary me-2"> Done</p>
              <p onClick={()=> updateStatus(order._id,'On Going')} className="btn btn-primary me-2"> On Going</p>
              <p onClick={()=> updateStatus(order._id,'Pending')} className="btn btn-primary me-2"> Pending </p>
              </td>
              </tr>
            ))}
        
          </tbody>
        </table>
      </div>
    </section>
    );
};

export default OrderList;