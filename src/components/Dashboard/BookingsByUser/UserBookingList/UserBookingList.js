import React from 'react';

const UserBookingList = ({bookingsList}) => {
    console.log(bookingsList);
    const {name,status} = bookingsList.order;
    return (
        
        <tr>
            <td>{bookingsList.name}</td>
            <td>{bookingsList.email}</td>
            <td>{name}</td>
            <td>{bookingsList.status}</td>
        </tr>

    );
};

export default UserBookingList;