import React, { Component } from 'react';
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
// Context can be named anything you want, I chose ProductContext. Context comes with two components:
// Provider and Consumer. Provider provides info to the entire app/ Consumer utilizes that info(pulls 
//     the info directly from the Provider)

class ProductProvider extends Component {
    state = {
        products: storeProducts,
        detailProduct: detailProduct
    }

    handleDetail = () => {
        console.log("Hello From detail")
    }
    addToCart = () => {
        console.log("Hello From cart")
    }



    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
                //    products: this.state.product - could also use
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}


const ProductConsumer = ProductContext.Consumer;


export { ProductProvider, ProductConsumer };


