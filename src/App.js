import React, { Component } from 'react';
import "./App.css";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import Home from "./components/Home";
// import SocialFollow from "./components/SocialFollow";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import Blog from "./components/Blog";
// import Explore from "./components/Explore";
import Forum from "./components/DiscussionForum/Forum";
import { ProductProvider } from './context';


// import SocialFollow from "./components/SocialFollow";


export default class App extends Component {
  render() {
    return (

      <>

        <ProductProvider>

          <Navbar />
          {/* <Route exact path="/explore" component={Explore}>
          </Route> */}
          <Switch>

            <Route exact path="/" component={Home}>
            </Route>

            <Route exact path="/shop" component={ProductList}>
            </Route>

            <Route exact path="/details" component={Details}>
            </Route>

            <Route exact path="/cart" component={Cart}>
            </Route>

            <Route exact path="/blog" component={Forum} />


            {/* <Route path="/" component={Landing}>p
          </Route> */}


            <Route component={Default}>
            </Route>


          </Switch>
          <Modal />


          
        </ProductProvider>
      </>

    )
  }
}