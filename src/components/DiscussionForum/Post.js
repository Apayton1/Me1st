import React, { Component } from 'react';
// import {forumPosts} from "../../data";

// import PropTypes from "prop-types";

export default class Post extends Component {
    render() {
        // const {id} = this.props.post
        return (
                
            <div className="panel panel-default post-input">
                <div className="panel-body">
                    {this.props.post}
                    

                    </div>
            </div>

        )
    }
}

