import styled from "styled-components";

const ButtonNav = styled.button`

    height: calc(6.25rem * 0.65);
    width: 6.25rem;

    padding: 0;
    border: none;

    color: #007090;
    background-color: inherit;
    font-size: calc(64px * 0.65);

    cursor: pointer;
    
    display: none;

    & img {
        width: inherit;
        height: inherit;
    }

`;


export default ButtonNav; 