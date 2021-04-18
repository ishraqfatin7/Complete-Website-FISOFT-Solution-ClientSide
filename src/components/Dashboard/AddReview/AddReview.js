import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import AdminNavbar from "../../Shared/AdminNavbar/AdminNavbar";

const AddReview = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageUrl, setImageUrl] = useState(null);
  const onSubmit = (data) => {
    console.log(data);
    const reviewData = {
      name: data.name,
      review: data.review,
    };
    const url = `https://glacial-anchorage-43619.herokuapp.com/addReview`;
    console.log(reviewData);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    }).then((response) => response.json())
    .then(data =>{
      if(data){
          alert('Review Added')
      }
  })
  };

  return (
    <div className="container-fluid">
      <div>
        <AdminNavbar></AdminNavbar>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="mt-5 p-5 card shadow-lg rounded-lg">
            <h3>Tell Us How You Felt</h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body py-5 d-flex"
            >
              <div className="row">
                <div className="col-sm-3">
                  <label htmlFor="">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    ref={register}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Review</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="review"
                    ref={register}
                  ></textarea>
                </div>
                <input type="submit" className="mt-5" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
