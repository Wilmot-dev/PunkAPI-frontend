import React from "react";
import Filter from '../../components/Filter';
import Search from '../../components/Search';
import styles from "./NavBar.module.scss";

const NavBar = ({ getBeers, isOpen }) => {
  let navJSX;
  
  if (isOpen) {
    navJSX = (
    <>
      <Search getBeers={getBeers} />
      <Filter />
    </>
    );
  }

  return (
    <>
      {navJSX}
    </>
  );
};

export default NavBar;
