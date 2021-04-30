import React from "react";
import styles from "./Filter.module.scss";

const Filter = ({ setFilters, getBeers, filter }) => {

  const beerFilter = (filterName) => {
    if (filter.includes(filterName)) {
      let newFilter = filter.replace(filterName, "");
      setFilters(newFilter);
      getBeers(newFilter)
    } else {
      let newFilter = filter + filterName;
      setFilters(newFilter);
      getBeers(newFilter);
    }
  }

  return (
    <>
    <label >
      {`High alcohol (abv > 6)`} <input type="checkbox" onInput={() => beerFilter("abv_gt=6&")}/>
    </label>
    <label >
      brewed before 2018: <input type="checkbox" onInput={() => beerFilter("brewed_before=01-2018&")}/>
    </label>
    </>
  );
};

export default Filter;
