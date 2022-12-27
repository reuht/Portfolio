import styled from "styled-components";


const Header = styled.header`
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
        height: calc(6.25rem * 0.65);

        & nav {
            width: 60%;
            height: 100vh;
            background-color: #302E49;
            display: ${props => props.menu ? 'block' : 'none'};
            box-shadow: 2px 6px 3px 1px;
            position: absolute;
            right: 0;
            top: 0;
            z-index: 20;

            & ul {
                
                height: max-content;
                flex-direction: column;
                align-items: flex-start;
                row-gap: 10px;
                position: relative;
                top: 12.50rem; 
            }
             
            & li {
                height: 2rem;
                display: flex; 
                justify-content: center;
                align-items: center;
                position: relative;
            }

            & a {
                
                font-size: 18px;
                font-weight: 600; 
            }
        }

        & button {
            height: calc(6.25rem * 0.65);
            width: calc(6.25rem * 0.65);

            display: block;
            position: relative;
            right: 0; 
        }
    }
`; 


export default Header; 