import styled from "styled-components";


export const ButtonContainer = styled.button`

text-transform:capitalize;
font-size:1rem;
color: var(--mainGreen) !important;
background: transparent;
border: 0.2rem solid white;
border-color: var(--mainPurple);
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background: var(--mainPurple);
    color: var(--mainBlue) !important;
}
&:focus{
    outline:none;
}
` 
