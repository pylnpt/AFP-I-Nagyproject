import React from "react";
import App from "./App.js";
import ReactDOM from "react-dom";

<<<<<<< HEAD
=======
import {Provider} from "react-redux";
import store from "./store";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

// styles
import "./assets/css/bootstrap.min.css";
import "./assets/demo/demo.css";
// pages
import Index from "./views/Index.js";
import NucleoIcons from "/views/NucleoIcons.js";
import CarListPage from "./components/cars-list.component";
import CarAddPage from "./components/create-car.component";
import ContactPage from '/views/pages/ContactPage';
import Login from "./components/login.component";
import PrivateRoute from "./components/private-route/PrivateRoute";
import OurCars from "./components/user-car-list.component";
import EditCar from "./components/edit-car.component";
// others

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
>>>>>>> parent of cdf4dd3... more debugging in the index.js ,Index.js(in the views folder ) and in the LandingPageHeader.js file

ReactDOM.render(
  
  <App></App>,
  document.getElementById("root")
);
