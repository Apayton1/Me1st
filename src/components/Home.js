import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import Forum from './DiscussionForum/Forum';

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="jumbotron jumbotron-fluid">
                        <div className = "container">
                            <div className = "row mx-auto">
                            <h1>Daily Affirmation</h1>
                            </div>

                            <div className = "row">
                            {/* <ProductConsumer>
                                { value => {
                                    return value.products.map( product => {
                                        return <Product key = {product.id} product = {product}/>
                                    })
                                }}
                            </ProductConsumer> */}
                            </div>
                            
                        </div>

                    </div>
                    <div className = "container">
                       This is From Forum
                       
                       
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
