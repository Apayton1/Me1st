import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Home from "./components/Home";

export default class App extends Component {
  render() {
    return (

      <React.Fragment>
        <h3> Hello From App </h3>
        <Navbar/>
        <Switch>
        <Route exact path = "/" component = {Home}>
          </Route>

          <Route path = "/shop" component = {ProductList}>
          </Route>

          <Route path = "/details" component = {Details}>
          </Route>

          <Route path = "/cart" component = {Cart}>
          </Route>

          <Route component = {Default}>
          </Route>

        </Switch>
        
      </React.Fragment>

    )
  }
}