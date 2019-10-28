import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class Post extends Component {
    render() {
        // const {id} = this.props.post
        return (

            <div className="panel panel-default post-input">
                <div className="panel-body">
                    Hello I am a post
                    </div>
            </div>

        )
    }
}
Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number
    }).isRequired
};
