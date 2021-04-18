import React, { useEffect, useState } from 'react';
import ServicesDetails from '../ServicesDetail/ServicesDetails';
const Services = () => {
  const [services,setServices] = useState([]);
  useEffect(()=>{
    fetch('https://glacial-anchorage-43619.herokuapp.com/services')
    .then(response => response.json())
    .then(services => setServices(services));
  },[])
    return (
        <div className="row container-fluid">
            <h1 className="text-center">
                All The Services From Us
            </h1>
            <div className="row">
               {
                    services.map( services => <ServicesDetails services={services} key ={services._id}></ServicesDetails>)
               }
            </div>
            
        </div>
    );
};

export default Services;