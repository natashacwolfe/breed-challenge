import React from "react";

export default function BreedTile(props) {
    let image = props.img.message
  console.log("@@@", image, props.img);
  return (
    <div>
      <img src={image} alt="Random cute pup!" />
    </div>
  );
}
