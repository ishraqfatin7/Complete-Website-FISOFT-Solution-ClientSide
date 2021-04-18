import React from "react";


const Facilities = (props) => {
   const {title,details,image} =props.facility;
   console.log(props.facility)

  return (
      <div className="col-md-4 py-5">
      <div className="card h-100 shadow rounded" style={{maxWidth:'540px'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img className="rounded img-fluid mx-auto d-block mt-5 w-50 h-50" src={image} alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
               {details}
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Facilities;
