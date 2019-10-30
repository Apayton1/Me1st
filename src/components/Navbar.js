import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from "../image (2)..png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
// import app from '../base';
// import { AuthProvider } from '../Auth';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="logo" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/blog" className="nav-link">
                            Blog
                        </Link>
                    </li>

                    {/* <li>
                        <Link to="/explore" className="nav-link">
                            Explore
                        </Link>
                    </li> */}

                    <li>
                        <Link to="/shop" className="nav-link">
                            Shop
                        </Link>
                    </li>
                </ul>
                
                <Link to="/cart" className="ml-auto">

                    <ButtonContainer className="btn">
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                        Shopping Cart
                    </ButtonContainer>

                </Link>
                {/* <ButtonContainer
                    className="btn ml-auto"
                    onClick={() => app.auth().signOut()}>
                    Log Out
                </ButtonContainer>
                 */}
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    // background: var(--mainPink);
    
    .nav-link{
        color:var(--darkBlue) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
    .nav-link:hover{
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1) ;
    }
    Link:hover{
        transition: all 1s linear
    }
  
`

