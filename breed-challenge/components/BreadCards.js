import React from "react";
import styles from './breedcards.module.css';

export default function BreedCards(props) {
  const images = props.images.message;
  const breed = props.alt;

  return (
    <div className={styles.cardContainer}>
      {images.map((img) => (
        <div className={styles.card} key={Math.random()}>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={img} alt={breed} />
          </div>
          <div className={styles.breedInfo}>
            <span>I am a {breed.toUpperCase()}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
