import React from "react";

export default function BreedCards(props) {
  const images = props.images.message;
  const breed = props.alt;

  return (
    <div>
      {images.map((img) => (
        <div key={Math.random()}>
          <div>
            <img src={img} alt={breed} />
          </div>
          <div>
            <span>I am a {breed.toUpperCase()}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
