import React, { Component } from 'react';
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import { detailProduct } from '../data';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    // console.log(value.detailProduct);
                    const { id, 
                            title, 
                            img, 
                            info, 
                            price, 
                            inCart 
                        } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted darkBlue my-5" >
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* end title */}
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product"></img>
                                </div>
                                {/* product text */}
                                <div className="col-10  mx-auto  col-md-6 my-3 text-capitalize">
                                    {/* <h1>{price}</h1> */}
                                    {/* <h4 className = "text-title text-uppercase text-muted mt-3 mb-2"> */}
                                    <h4 className="darkBlue">
                                        <strong>
                                            Price :<span>$</span>
                                            {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Some info about the product : </p>
                                    <p>
                                        <span className="text-muted lead">{info}</span>
                                    </p>
                                    {/* buttons */}
                                    <div>
                                        <Link to = "/shop">
                                            <ButtonContainer className = "btn">
                                                Back to products
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer className = "btn"
                                        disabled = {inCart?true:false}
                                        onClick = {() =>{
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}
                                        >
                                            {inCart?"in cart": "add to cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
