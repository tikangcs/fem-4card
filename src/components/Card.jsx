import React from "react";

export default function Card({ title, description, img, id }) {
  return (
    <div className="card" id={id}>
      <div className="card__title">{title}</div>
      <div className="card__description">{description}</div>
      <div className="card__image--container">
        <img className="card__image" src={img} />
      </div>
    </div>
  );
}
