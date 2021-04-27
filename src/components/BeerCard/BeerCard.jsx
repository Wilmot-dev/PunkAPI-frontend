import React from "react";
import styles from "./BeerCard.module.scss";

const BeerCard = ({ beers }) => {

  console.log(beers);

  const beerCardsJSX = beers.map(beer => {
    let description = "";
    let foodpairing = "";
    if (beer.description.length >= 70) {
      description = beer.description.slice(0, 60) + "...";
    } else {
      description = beer.description;
    }
    if (beer.food_pairing.join(", ").length >= 40) {
      foodpairing = beer.food_pairing.join(", ").slice(0, 40) + "...";
    } else {
      foodpairing = beer.food_pairing.join(", ");
    }
    return (
      <div className={styles.beerCard} key={beer.id}>
        <img src={beer.image_url} alt="picture of the beer"/>
        <h2>{beer.name}</h2>
        <p>{beer.tagline}</p>
        <ul>
          <li>Description: {description}</li>
          <li>ABV: {beer.abv}</li>
          <li>Value: {beer.volume.value} {beer.volume.unit} </li>
          <li>Food pairing: {foodpairing} </li>
        </ul>
      </div>
    )
  });

  return (
    <>
    <div className={styles.beerList}>
      {beerCardsJSX}
    </div>
    {/* <p>hello</p> */}
    </>
  );
};

export default BeerCard;
