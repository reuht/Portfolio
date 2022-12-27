import Header from "../../Components/Header";
import Nav from "../../Components/Nav";
import Path from "../../Path";
import Logo from "../../Components/Logo";
import ButtonNav from "../../Components/ButtonNav";
import imgButton from "../../img/movil-boton.svg";


import { useState } from "react";

const HeaderConatiner = () => {
  const [active, setActive] = useState("none");

  const handlerActiveButtonNav = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <Header menu={active}>
      <Logo>
        <span>JV</span>
      </Logo>
      <Nav>
        <ButtonNav onClick={ handlerActiveButtonNav }>X</ButtonNav>
        <ul>
          {Path.map((rute, index) => (
            <li key={index}>
              <a key={index} onClick={handlerActiveButtonNav} href={rute.path}>
                {rute.name}
              </a>
            </li>
          ))}
        </ul>
      </Nav>
      <ButtonNav onClick={handlerActiveButtonNav}>
        <img src={imgButton} alt="btn" />
      </ButtonNav>
    </Header>
  );
};

export default HeaderConatiner;
