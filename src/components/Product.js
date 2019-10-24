import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card ">
                    <ProductConsumer>
                        {(value) => (
                            <div className="img-container p-5"
                                onClick={() =>
                                    // console.log("you clicked me on the image container")
                                    value.handleDetail(id)

                                }>

                                <Link to="/details">
                                    <img src={img}
                                        alt="product"
                                        className="card-img-top" />
                                </Link>

                                <button
                                    className="card-btn"
                                    disable={inCart ? true : false}
                                    onClick={() => {
                                        // console.log("added to the cart")
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}>


                                    {inCart ? (
                                        <p className="text-capitalize mb-0" aria-disabled="true">
                                            {""}
                                            in Cart
                                    </p>
                                    ) : (
                                            <i className="fas fa-cart-plus" />
                                        )}

                                </button>

                            </div>
                        )}
                    </ProductConsumer>
                    {/* Card Footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {/* must use the align self center class so that both items can be on the same
                     line despite the fact that the price is larger than the product */}
                            {title}
                        </p>
                        <h5 className=" darkBlue font-italic mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>

                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};

const ProductWrapper = styled.div`
.card{
    border-color: transparent;
    // transition adds border over a period of time
    transition: all 1s linear
}
.card-footer{
    background: transparent;
    border-top: tarnsparent;
    transition: all 1s linear;
    // transition: property length type
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background: rgba(247, 247, 247)
    }
}
.img-container{
    position:relative;
    overflow: hidden;
}

.card-img-top{
    transition:all 0.5s linear
}
.img-container:hover .card-img-top{
    transform: scale(1.2);
}
.card-btn{
    position: absolute;
    bottom:0;
    right:0;
    padding: 0.2rem 0.4rem;
    background: var(--mainBlue);
    border: none;
    color: white;
    font-size: 1.4rem
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
}
.img-container:hover .card-btn{
    transform: translate(0, 0);
    transition: all 1s linear;
}
.card-btn:hover{
    color: var(--darkBlue);
    cursor: pointer;
}
`
