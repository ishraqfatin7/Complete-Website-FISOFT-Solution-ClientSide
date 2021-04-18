import React from 'react';
import Facilities from '../Facilities/Facilities';
import repairService from '../../../images/repairing-service-icon.svg';
import honest from '../../../images/loyalty.svg';
import calendar from '../../../images/calendar.svg';
const facilities = [
    {
      title: "Honest Services",
      details:
        "We are so confident with our service that if we can’t fix the problem, you don’t pay. All repairs come with a 30 day guarantee",
      image:honest
    },
    {
      title: "Quick Repair",
      details:
        "Our company is reliable, and our work is trusted. We provide worry-free service you can always count on",
        image:repairService
    },
    {
      title: "On time delivery",
      details:
        "Choose the delivery method that matches your requirements. We provides fast and quick pick and drop facility",
        image:calendar
    },
  ];
const FacilitiesInfo = () => {
    return (
        <div className="row w-75 ">
        {
            facilities.map((facility)=> <Facilities facility={facility} key={facility.title}></Facilities>)
        }
      </div>
    );
};

export default FacilitiesInfo;