import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import AdminNavbar from "../../Shared/AdminNavbar/AdminNavbar";

const AddService = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageUrl, setImageUrl] = useState(null);
  const onSubmit = (data) => {
    console.log(data);
    const serviceData = {
      name: data.name,
      imageUrl: imageUrl,
      description: data.details,
      price:data.price
    };
    const url = `https://glacial-anchorage-43619.herokuapp.com/addService`;
    console.log(serviceData);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serviceData),
    }).then((response) => console.log("From Server Side", response));
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "2c691c64fdddb95af8e2a4459d385dbd");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="container-fluid">
        <div>
            <AdminNavbar></AdminNavbar>
        </div>
        <div className="d-flex align-items-center justify-content-center">
        <div className="row">

<div className="mt-5 p-5 card shadow-lg rounded-lg">
  <h3>Add A Service</h3>
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="card-body py-5 d-flex"
  >
    <div className="row">
      <div className="col-sm-5">
        <label htmlFor="">Service Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          ref={register}
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Details About Service</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          name="details"
          ref={register}
        ></textarea>
        <label htmlFor="">Price</label>
        <input
          type="text"
          className="form-control"
          name="price"
          ref={register}
        />
      </div>

      <div className="col-sm mt-5">
          <label htmlFor="">Feature Photo</label>
        <input type="file" onChange={handleImageUpload} name="" id="" />
        <input type="submit" className="mt-5" />
      </div>
    </div>
  </form>
</div>
</div>
        </div>
    </div>
    
  );
};

export default AddService;
