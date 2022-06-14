import React, { useState } from "react";

function ToyCard({ toy: { id, name, image, likes }, onDonate, onUpdateToy }) {
  function handleDelete() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    });
    onDonate(id);
  }

  function countLikes() {
    const updatedLikeObj = { likes: likes + 1 };
    console.log(updatedLikeObj);
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedLikeObj),
    })
      .then((response) => response.json())
      .then(onUpdateToy);
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={countLikes}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleDelete}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
