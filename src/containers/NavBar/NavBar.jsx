import React from "react";
import Filter from '../../components/Filter';
import Search from '../../components/Search';
import styles from "./NavBar.module.scss";

const NavBar = ({ getBeers, isOpen, setFilters, filter }) => {
  let navJSX;
  
  if (isOpen) {
    navJSX = (
    <>
      <Search getBeers={getBeers} />
      <Filter setFilters={setFilters} filter={filter} getBeers={getBeers}/>
    </>
    );
  }

  return (
    <div className={styles.navbar}>
      {navJSX}
    </div>
  );
};

export default NavBar;
