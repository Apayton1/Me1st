import React from 'react';
import {Link} from "react-router-dom";
import PayPalButton from "./PayPalButton";

export default function CartTotals({value, history}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return (
        <React.Fragment>
            <div className = "container">
                <div className = "row">
                    <div className = "col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-cpitalize text-right">
                    <Link to = "/shop">
                        <button className = "btn btn-outline-danger text-uppercase mb-3 px-5"
                        type = "button"
                        onClick = {() => clearCart()}> 
                        <strong>clear cart</strong>
                        </button>
                    </Link>
                    <h5>
                        <span className = "text-title textColor">
                            SubTotal : </span>
                            <strong className = "textColor">$ {cartSubTotal}</strong>
                    </h5>
                    <h5>
                        <span className = "text-title textColor">
                            Tax : </span>
                            <strong className = "textColor">$ {cartTax}</strong>
                    </h5>
                    <h5>
                        <span className = "text-title textColor">
                            Total : </span>
                            <strong className = "textColor">$ {cartTotal}</strong>
                    </h5>
                    <PayPalButton 
                    total = {cartTotal} 
                    clearCart = {clearCart}
                    history = {history} 
                    />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
