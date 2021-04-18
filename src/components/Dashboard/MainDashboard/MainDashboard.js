import React from 'react';
import BookingsByUser from '../BookingsByUser/BookingsByUser';


const MainDashboard = () => {
    return (
        <div className="container-fluid">
             <div className="d-flex align-items-center justify-content-center" >
                 <BookingsByUser></BookingsByUser>
             </div>
        </div>
    );
};

export default MainDashboard;