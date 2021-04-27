import React from "react";
import styles from "./Search.module.scss";

const Search = ({getBeers}) => {
  return (
    <>
      <p>Search <input type="text" placeholder="search here" onInput={e => getBeers(e.target.value)} /></p>
    </>
  );
};

export default Search;
