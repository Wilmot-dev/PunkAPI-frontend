import React, { useState } from 'react';
import BeerCard from './components/BeerCard';
import './App.css';

function App() {
  const [beers, setBeers] = useState(fetch("https://api.punkapi.com/v2/beers/1").then(response => response.json()).then(jsonResponse => jsonResponse.map(mapBeer)));

  const mapBeer = (beer) => {
    return {
      ...beer,
    }
  };

  return (
    <div className="App">
      <h1>PUNKAPI FRONTEND</h1>
      <BeerCard beers={beers} />
    </div>
  );
}

export default App;
