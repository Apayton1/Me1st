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
                    <i class="far fa-copyright"></i>
                </span>
            </h2>
            <h3>Social Follow</h3>
            <a href=""
                className="youtube social navbar-brand">

                <FontAwesomeIcon icon={faYoutube} size="2px" />

            </a>
            <a href=""
                className="facebook social navbar-brand">

                <FontAwesomeIcon icon={faFacebook} size="2px" />

            </a>
            <a href=""
                className="instagram social navbar-brand">

                <FontAwesomeIcon icon={faInstagram} size="2px" />

            </a>
            <a href=""
                className="twitter social navbar-brand">

                <FontAwesomeIcon icon={faTwitter} size="2px" />

            </a>

        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`

    background: var(--mainPink);
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
    
`


