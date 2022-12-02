import Header from "../../Components/Header";
import Nav from "../../Components/Nav";
import Path from "../../Path";
import Logo from "../../Components/Logo";
import ButtonNav from "../../Components/ButtonNav";
import { useState } from "react";

const HeaderConatiner = () => {
    const [ active, setActive ] = useState(false); 

    const handlerActiveButtonNav = () =>{
      if(active){
        setActive(active => false); 
      }
    } 
    return ( 
        <Header>
        <Logo>
          <span>JV</span>
        </Logo>
        <Nav>
          <ul>
            {Path.map((rute) => (
              <li>
                <a href={rute.path}>{rute.name}</a>
              </li>
            ))}
          </ul>
        </Nav>
        <ButtonNav onClick={() => handlerActiveButtonNav }>
            &#9776; 
        </ButtonNav>
      </Header>
    ); 
}

export default HeaderConatiner; 