import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.scss";

function Card({ id, name, email }) {
  const navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate(`/detail/${id}`)}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt="user avatar"
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;
