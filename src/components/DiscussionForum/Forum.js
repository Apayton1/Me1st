import React from 'react';
import styled from "styled-components";
import { ButtonContainer } from '../Button';
import { ProductConsumer } from "../../context";
import Post from "./Post";
import "../../App.css";


export default function Forum(value) {
    const { addPost } = value;
    return (
        <div className="container blogPostCon">
            <PanelContainer className = "rounded">
                <div className="section blogPageSec">

                    <div className="panel panel-default post-input">
                        <div className="content-head">
                            <h2>The Latest Me1st Posts</h2>
                        </div>

                        <div className="panel-body">
                            <div className="thumbnail">
                                <img src = "https://www.feedfond.com/wp-content/uploads/2019/07/15-Must-read-tips-before-starting-out-your-first-blog.jpg"/>
                            </div>
                            <div className = "entry">
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
                                <img src = "https://www.feedfond.com/wp-content/uploads/2019/07/15-Must-read-tips-before-starting-out-your-first-blog.jpg"/>
                            </div>
                            <div className = "entry">
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
                                <img src = "https://www.feedfond.com/wp-content/uploads/2019/07/15-Must-read-tips-before-starting-out-your-first-blog.jpg"/>
                            </div>
                            <div className = "entry">
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
                <PanelContainer className = "rounded">
                    <ProductConsumer>
                        {value => {
                            return value.posts.map(post => {
                                return <Post key={post.id} post={post} />
                            })
                        }}
                    </ProductConsumer>

                    <div className="panel panel-default post-input">
                        <div className="panel-body">
                            Hello world
                        <textarea className="form-control" />
                            <ButtonContainer
                                className="btn post-btn "
                                onClick={() => addPost()}
                            >
                                Post
                        </ButtonContainer>
                        </div>
                    </div>
                </PanelContainer>
            </div>
        </div>
    )
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
