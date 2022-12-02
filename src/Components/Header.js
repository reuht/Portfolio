import styled from "styled-components";


const Hero = styled.header`
    background-color: #302E49; 

    width: 100%;
    height: 6.25rem;
    padding: 0 6.25rem 0 6.25rem;
    
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 0;

    @media (max-width: 992px) {
        padding: 0 1.5rem 0 1.5rem;

        & nav {
            display: none;
        }

        & button {
            display: block;
            position: relative;
            right: 0; 
        }
    }
`; 


export default Hero; 