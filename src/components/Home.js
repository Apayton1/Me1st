import React, { Component } from 'react';
// import { ButtonContainer } from './Button';
// import app from '../firebase';
// import { ProductConsumer } from '../context';
// import Forum from './DiscussionForum/Forum';
import SocialFollow from "./SocialFollow";
import "./cardStyle.css";
import { ButtonContainer } from './Button';


export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                
                <div className="py-5">
                
                
                    <div className="jumbotron jumbotron-fluid disappear">
                        <div className = "container center">
                            <div className = "row mx-auto">
                                <div class="panel panel-default">
                                    <div class="panel-body">
                                      <h1>Daily Affirmation : </h1>
                                    </div>
                                </div>
                            </div>
                            <div className = "row mx-auto">
                                
                            <span className = "quote"><h1>"I am love. I am purpose. <br></br>I was made with divine intention."</h1></span>
                            
                            </div>

                            <div className = "row">
                    
                            </div>
                            
                        </div>

                    </div>
                    <div className = "container center">
                       
                       <div className = "row">
                       <h2>THE PURPOSE OF THE ME1ST MOVEMENT IS TO BUILD THE ME1ST MOVEMENT, WHICH PROMOTES A CIRCULATION OF SUPPORT, KNOWLEDGE, AND ENCOURAGEMENT IN CARING FOR ONESELF.</h2>
                       </div>
                    </div>
                </div>

            <div className= "container">
                        <div className = "container">
                            
                            <div className = "row mx-auto">
                            <h1>News feed</h1>
                            
                            </div>

                            <div className = "row">
                            <div className = "col-md-4">
                                <div className = "card text-center shadow">
                                    <div className = "overflow">
                                        <img src = "http://oralpod.phil.hhu.de/wp-content/uploads/2019/01/wpid-wp-1436767891125-467x410.jpeg" alt = "" className = "card-img-top allOther"/>
                                    </div>
                                    <div className = "card-body text-dark">
                                        <h4 className = "card-title">25 Self-Care Tips to Help You Be the Best Version of You</h4>
                                        <p></p>
                                    </div>
                                    <ButtonContainer className = "btn">
                                    <a href = "https://www.oprahmag.com/life/health/g25939272/self-care-tips/">
                                        Go To Article
                                    </a>
                                    </ButtonContainer>
                                </div>
                            </div>
                            <div className = "col-md-4">
                            <div className = "card text-center shadow">
                                    <div className = "overflow">
                                        <img src = "https://humanoriginproject.com/wp-content/uploads/2019/05/What-is-mindfulness-meditation.jpg" alt = "" className = "card-img-top allOther"/>
                                    </div>
                                    <div className = "card-body text-dark">
                                        <h4 className = "card-title">Mindfulness meditation may ease anxiety, mental stress</h4>
                                        <p></p>
                                    </div>
                                    <ButtonContainer className = "btn">
                                    <a href = "https://www.health.harvard.edu/blog/mindfulness-meditation-may-ease-anxiety-mental-stress-201401086967">
                                        Go To Article
                                    </a>
                                    </ButtonContainer>
                                </div>
                            </div>
                            <div className = "col-md-4">
                            <div className = "card text-center shadow">
                                    <div className = "overflow">
                                        <img src = "https://www.brailleinstitute.org/wp-content/uploads/2018/07/stress-management.jpg" alt = "" className = "card-img-top allOther"/>
                                    </div>
                                    <div className = "card-body text-dark">
                                        <h4 className = "card-title">How to Reduce, Prevent, and Cope with Stress</h4>
                                        <p></p>
                                    </div>
                                    <ButtonContainer className = "btn">
                                    <a href = "https://www.brainline.org/article/stress-management-how-reduce-prevent-and-cope-stress">
                                        Go To Article
                                    </a>
                                    </ButtonContainer>
                                </div>
                            </div>
                    
                            </div>
                            <div className = "row mt-5">
                            <div className = "col-md-4">
                                <div className = "card text-center shadow">
                                    <div className = "overflow">
                                        <img src = "https://images-prod.healthline.com/hlcmsresource/images/Lifestyle/3818-SCC_13_Steps_Self_Love-1296x728-header.jpg" alt = "" className = "card-img-top allOther"/>
                                    </div>
                                    <div className = "card-body text-dark">
                                        <h4 className = "card-title">13 Steps to Achieving Total Self-Love</h4>
                                        <p></p>
                                    </div>
                                    <ButtonContainer className = "btn">
                                    <a href = "https://www.healthline.com/health/13-self-love-habits-every-woman-needs-to-have#1">
                                        Go To Article
                                    </a>
                                    </ButtonContainer>
                                </div>
                            </div>
                            <div className = "col-md-4">
                                <div className = "card text-center shadow">
                                    <div className = "overflow">
                                        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXyTUSxW5_6xj9lkH2e1fjOTwb9TwDv3xIDcVlLw__xzRRK4GT-Q&s" alt = "" className = "card-img-top allOther"/>
                                    </div>
                                    <div className = "card-body text-dark">
                                        <h4 className = "card-title">The Health Benefits of Laughter -Are You Lauging Enough</h4>
                                        <p></p>
                                    </div>
                                    <ButtonContainer className = "btn">
                                    <a href = "https://www.everydayhealth.com/womens-health/health-benefits-of-laughter.aspx">
                                        Go To Article
                                    </a>
                                    </ButtonContainer>
                                </div>
                            </div>
                            <div className = "col-md-4">
                                <div className = "card text-center shadow">
                                    <div className = "overflow">
                                        <img src = "data:image/png;base64,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" alt = "" className = "card-img-top allOther"/>
                                    </div>
                                    <div className = "card-body text-dark">
                                        <h4 className = "card-title">Self-Care For Women Is More Work Than Buying Products</h4>
                                        <p></p>
                                    </div>
                                    <ButtonContainer className = "btn">
                                    <a href = "https://www.huffpost.com/entry/women-self-care_l_5c48d765e4b0b6693676728d">
                                        Go To Article
                                    </a>
                                    </ButtonContainer>
                                </div>
                            </div>
                            </div>
                            
                        </div>

                    </div>
                   


                

                
                    <SocialFollow/>
                
            </React.Fragment>
        )
    }
}


