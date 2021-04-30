import React, { useState, useEffect } from 'react';
import BeerCard from './components/BeerCard';
import NavBar from './containers/NavBar';
import './App.css';

function App() {
  const [beers, setBeers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilters] =  useState(""); 

  const getBeers = (searchTerm) => {
    console.log("this search term is:" + searchTerm);
    if(searchTerm.length === 0) { 
      return fetch("https://api.punkapi.com/v2/beers")
      .then(response => response.json())
      .then(jsonResponse => jsonResponse.map(mapBeer));
    } else {
      if (searchTerm.length >= 1) {
        return fetch(`https://api.punkapi.com/v2/beers?${searchTerm}`)
        .then(response => response.json())
        .then(jsonResponse => setBeers(jsonResponse.map(mapBeer)))
      } else {
        return fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`)
        .then(response => response.json())
        .then(jsonResponse => setBeers(jsonResponse.map(mapBeer)));
      }
    }
  };

  const mapBeer = (beer) => {
    return {
      ...beer,
    }
  };

  useEffect(() => {
    getBeers("").then(response => setBeers(response));
  }, [])


  return (
    <div className="App">
      <div className="heading">
        <p onClick={() => setIsOpen(!isOpen)} className="search" >search/filter</p>
        <h1>BrewDog beers</h1>
        <p>data provided by Punk API</p>
      </div>
      <NavBar getBeers={getBeers} isOpen={isOpen} setFilters={setFilters} filter={filter}/>
      <BeerCard beers={beers} />
    </div>
  );
}

export default App;
