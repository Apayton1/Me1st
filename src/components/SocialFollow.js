import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    // faCopyright,

} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
    return (
        <FooterWrapper className=" navbar navbar-expand-sm px-sm-5 fixed-bottom navbar-light">
            <h2>Me1st
            <span>
                    <i className="far fa-copyright"></i>
                </span>
            </h2>
            <h3>Social Follow</h3>
            <a href="https://www.youtube.com/channel/UChGb6buWJGBYmZqI2U7xbOA?view_as=subscriber"
                className="youtube social navbar-brand">

                <FontAwesomeIcon icon={faYoutube} size="1x" />

            </a>
            <a href="https://www.facebook.com/profile.php?id=100004604086757"
                className="facebook social navbar-brand">

                <FontAwesomeIcon icon={faFacebook} size="1x" />

            </a>
            <a href="https://www.instagram.com/aquilaaa_/"
                className="instagram social navbar-brand">

                <FontAwesomeIcon icon={faInstagram} size="1x" />

            </a>
            <a href="https://twitter.com/Me1st_harriott"
                className="twitter social navbar-brand">

                <FontAwesomeIcon icon={faTwitter} size="1x" />

            </a>

        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`

    background: whitesmoke;
    position: relative;
    height:10rem;
    opacity: 0.65;
    z-index:0;
    margin-top: 10rem;
    bottom:0;
    width:100%;
    clear:both;
    padding: 1.5rem 3.1rem;
    display: inline-block;
    text-align:center;
    .social{
        margin: 0 1rem;
        transition:transform 250ms;
        display: inline-block;
        // Must be in block because you cannot transform an inline element
    }
    .social:hover{
        transform: translateY(-2px);
    }
    .youtube{
        color: #eb3223;
    }
    .facebook{
        color: #4968ad;
    }
    .twitter{
        color: #49a1eb;
    }
    .instagram{
        color: black;
    }
    @media screen and (min-width: 500px) {
        footer {
           position: relative;
        }
    
`


