import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from 'react';
import Main from "./components/Home/Main/Main";
import SignIn from "./components/Login/SignInAndUp/SignIn";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import MainDashboard from "./components/Dashboard/MainDashboard/MainDashboard";
import AddService from "./components/Dashboard/AddService/AddService";
import OrderService from "./components/Dashboard/OrderService/OrderService";
import BookingsByUser from "./components/Dashboard/BookingsByUser/BookingsByUser";
import AddReview from "./components/Dashboard/AddReview/AddReview";
import MakeAdmin from "./components/Dashboard/MakeAdmin/MakeAdmin";
import ManageService from "./components/Dashboard/ManageService/ManageService";
import OrderList from "./components/Dashboard/OrderList/OrderList";



export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path = "/">
            <Main></Main>
          </Route>
          <Route path = "/home">
            <Main></Main>
          </Route>
          <Route path="/login">
            <SignIn></SignIn>
          </Route>
          <PrivateRoute path = "/dashboard">
            <MainDashboard></MainDashboard>
          </PrivateRoute>
          <PrivateRoute path = "/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
              <OrderService></OrderService>
          </PrivateRoute>
          <PrivateRoute path = "/bookings">
            <BookingsByUser></BookingsByUser>
          </PrivateRoute>
          <PrivateRoute path = "/addReview">
            <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path = "/makeAdmin">
           <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path = "/manageService">
           <ManageService></ManageService>
          </PrivateRoute>
          <PrivateRoute path = "/orders">
           <OrderList></OrderList>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
