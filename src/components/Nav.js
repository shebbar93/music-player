import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ navbarStatus, setNavBarStatus }) => {
  const navHandler = () => {
    setNavBarStatus(!navbarStatus);
  };
  return (
    <nav className='nav'>
      <h1>Waves</h1>
      <button onClick={navHandler}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
