import React from "react";
import CardItem from "./Carditem";
import "./Card.css";

function Card() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className=" cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep in the amazon jungle"
              label="Adventure"
              source="/services"
            />

            <CardItem
              src="images/img-2.jpg"
              text="Explore the hidden waterfall deep in the amazon jungle"
              label="Luxury"
              source="/services"
            />
            </ul>
            <ul className= "cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Explore the hidden waterfall deep in the amazon jungle"
              label="Mystery"
              source="/services"
            />
           
            <CardItem
              src="images/img-4.jpg"
              text="Explore the hidden waterfall deep in the amazon jungle"
              label="Adventure"
              source="/services"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Explore the hidden waterfall deep in the amazon jungle"
              label="Adrenaline"
              source="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
