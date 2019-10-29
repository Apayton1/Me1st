import React, { Component } from 'react';
import styled from "styled-components";
import { ButtonContainer } from '../Button';
import { ProductConsumer } from "../../context";
import Post from "./Post";
import "../../App.css";
import { forumPosts } from "../../data";



export default class Forum extends Component {
    state = {
        enteredData: ""
    }
    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { value } = event.target;
        this.setState({
            enteredData: value
        });
    };

    render() {
        return (
            <div className="container blogPostCon">

                <PanelContainer className="rounded">
                    <div className="section blogPageSec">

                        <div className="panel panel-default post-input">
                            <div className="content-head">
                                <h2>The Latest Me1st Posts</h2>
                            </div>

                            <div className="panel-body">
                                <div className="entry">
                                    <img
                                        className="float-left"
                                        src="https://www.feedfond.com/wp-content/uploads/2019/07/15-Must-read-tips-before-starting-out-your-first-blog.jpg" />

                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Neque facere iusto omnis. Nam sint quos tenetur nobis itaque
                                    iure placeat repudiandae minima eligendi similique temporibus,
                                    unde accusantium numquam delectus rem?Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Neque facere iusto omnis. Nam sint
                                    quos tenetur nobis itaque iure placeat repudiandae minima eligendi
                                    similique temporibus, unde accusantium numquam delectus rem?Lorem
                                    ipsum dolor sit amet consectetur adipisicing elit. Neque facere iusto
                                    omnis. Nam sint quos tenetur nobis itaque iure placeat repudiandae
                                    minima eligendi similique temporibus, unde accusantium numquam delectus rem?
                            </div>

                            </div>
                            <div className="panel-body">
                                <div className="thumbnail">
                                    <img
                                        className="float-left"
                                        src="https://www.feedfond.com/wp-content/uploads/2019/07/15-Must-read-tips-before-starting-out-your-first-blog.jpg" />
                                </div>
                                <div className="entry">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Neque facere iusto omnis. Nam sint quos tenetur nobis itaque
                                    iure placeat repudiandae minima eligendi similique temporibus,
                                    unde accusantium numquam delectus rem?Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Neque facere iusto omnis. Nam sint
                                    quos tenetur nobis itaque iure placeat repudiandae minima eligendi
                                    similique temporibus, unde accusantium numquam delectus rem?Lorem
                                    ipsum dolor sit amet consectetur adipisicing elit. Neque facere iusto
                                    omnis. Nam sint quos tenetur nobis itaque iure placeat repudiandae
                                    minima eligendi similique temporibus, unde accusantium numquam delectus rem?
                            </div>

                            </div>
                            <div className="panel-body">
                                <div className="thumbnail">
                                    <img
                                        className="float-left"
                                        src="https://www.feedfond.com/wp-content/uploads/2019/07/15-Must-read-tips-before-starting-out-your-first-blog.jpg" />
                                </div>
                                <div className="entry">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Neque facere iusto omnis. Nam sint quos tenetur nobis itaque
                                    iure placeat repudiandae minima eligendi similique temporibus,
                                    unde accusantium numquam delectus rem?Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Neque facere iusto omnis. Nam sint
                                    quos tenetur nobis itaque iure placeat repudiandae minima eligendi
                                    similique temporibus, unde accusantium numquam delectus rem?Lorem
                                    ipsum dolor sit amet consectetur adipisicing elit. Neque facere iusto
                                    omnis. Nam sint quos tenetur nobis itaque iure placeat repudiandae
                                    minima eligendi similique temporibus, unde accusantium numquam delectus rem?
                            </div>

                            </div>
                        </div>

                    </div>
                </PanelContainer>
                <div className="section blogPageSec">
                    <PanelContainer className="rounded">
                        <ProductConsumer>
                            {value => {
                                console.log(2, value.posts);
                                return value.posts.map((post, index) => {
                                    return <Post key={index} post={post} />
                                })
                            }}
                        </ProductConsumer>
                        <ProductConsumer>
                            {value => {
                                return (
                                    <div className="panel panel-default post-input">
                                        <input className="form-control"
                                            name="enteredData"
                                            value={this.state.enteredData}
                                            onChange={this.handleInputChange}
                                        />
                                        <ButtonContainer
                                            className="btn post-btn "
                                            onClick={() => value.addPost(this.state.enteredData)}
                                        >
                                            Post
                                        </ButtonContainer>
                                    </div>
                                )
                            }}
                        </ProductConsumer>
                        <ProductConsumer>
                            {value => {
                                return value.posts.map((post, index) => (
                                    <div key={index} className="panel-body">{post.entry}</div>
                                ))
                            }}
                        </ProductConsumer>

                    </PanelContainer>
                </div >
            </div >
        )
    }
}


export const PanelContainer = styled.div`
        
        text-transform:capitalize;
        font-size:1rem;
        color: var(--mainGreen) !important;
        background: whitesmoke;
        opacity:0.85 !important;
        border: 0.5rem solid white;
        border-color: var(--mainPurple);
        padding: 0.2rem 0.5rem;
        cursor: pointer;
        margin: 0.5rem 10rem 0.2rem 10rem;
.panel-body{
                border: 0.1rem solid white;
            border-color: var(--mainPurple);
            padding: 0.2rem 0.5rem;
            cursor: pointer;
            margin: 0.5rem 5rem 0.2rem 5rem;
        }
        
        
        
        
// import React, {Component} from 'react';
            // import styled from "styled-components";
// import {ButtonContainer} from '../Button';
// import {ProductConsumer} from "../../context";
            // import Post from "./Post";
            
// export default class Forum extends Component {
//     render() {
//         return (
//             <PanelContainer>
//                 <ProductConsumer>
//                     {value => {
//                         return value.posts.map(post => {
//                             return <Post key={post.id} post={post} />
//                         })
//                     }}
//                 </ProductConsumer>

//                 <div className="panel panel-default post-input">
//                     <div className="panel-body">
//                         Hello world
//                         <textarea className="form-control" />
//                         <ButtonContainer 
//                         className="btn post-btn "
//                         onClick = {() => addPost()}>
//                             Post
//                         </ButtonContainer>
//                     </div>
//                 </div>
//             </PanelContainer>

//         )
//     }
// }
// export const PanelContainer = styled.div`

// text-transform:capitalize;
// font-size:1rem;
// color: var(--mainGreen) !important;
// background: white;
// border: 0.5rem solid white;
// border-color: var(--mainPurple);
// padding: 0.2rem 0.5rem;
// cursor: pointer;
// margin: 0.5rem 10rem 0.2rem 10rem;
// .panel-body{
//     border: 0.1rem solid white;
//     border-color: var(--mainPurple); 
//     padding: 0.2rem 0.5rem;   
//     cursor: pointer;
//     margin: 0.5rem 5rem 0.2rem 5rem;
// }


// // @media(max-width: 900px){
// //     post-input{
// //         margin: 0;
// //     }
// // }
// `
