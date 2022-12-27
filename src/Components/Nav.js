import styled from "styled-components";


const Nav = styled.nav`

    height: inherit;
    width: max-content;
    display: flex;

    & ul {
        margin: 0; 
        padding: 0;
        height: inherit;
        display: flex;
    }

    & li {
        width: max-content;
        padding: 0.5rem; 
        margin: 0 1rem 0 1rem;
        list-style: none;
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center; 

        & img {
            display: none;
        }

        & a {
            color: white;
            text-decoration: none;
        }
    }

     & button {
        display: none;
    }

    @media (max-width: 992px) {
        & button {
            display: block;
        }
    } 


`; 

export default Nav; 