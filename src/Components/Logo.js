import styled from "styled-components";


const Logo = styled.div`

    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;

    & span {
        color: rgba(251, 245, 243, 1);
        font-family: 'La Belle Aurore';
        font-size: 2.7rem; 
    }

    & span:hover {
        color: gold;
    }
`; 

export default Logo; 