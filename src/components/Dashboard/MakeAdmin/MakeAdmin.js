import React from "react";
import { useForm } from "react-hook-form";
import AdminNavbar from "../../Shared/AdminNavbar/AdminNavbar";
const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const adminData = {
      name: data.name,
      email: data.email,
    };
    const url = `https://glacial-anchorage-43619.herokuapp.com/addAdmin`;
    console.log(adminData);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adminData),
    }).then((response) => console.log("From Server Side", response));
  };

  return (
    <div className="container-fluid">
      <div>
        <AdminNavbar></AdminNavbar>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="mt-5 p-5 card shadow-lg rounded-lg">
            <h3>Fill up the details</h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body py-5 d-flex"
            >
              <div className="row">
                <div className="col-sm-3">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    ref={register}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Email</label>
                  <input type="email" name="email" id="" className="form-control" ref={register}/>
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

export default MakeAdmin;
