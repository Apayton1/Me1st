import React, { Component } from 'react';
import styled from "styled-components";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

export default class Affirmation extends Component {
    render() {

        const {message} = this.props.affirmation
        return (
            
                <ProductConsumer>
                    

                </ProductConsumer>

          
        )
    }
}
