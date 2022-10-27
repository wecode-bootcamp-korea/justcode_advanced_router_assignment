import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import "./Monster.scss";

function Monster() {
  const [monster, setMonster] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((response) => response.json())
      .then((result) => setMonster(result));
  }, [params.id]);

  const clickPrevious = () => {
    if (monster.id === 1) return;
    navigate(`/detail/${monster.id - 1}`);
  };

  const clickNext = () => {
    navigate(`/detail/${monster.id + 1}`);
  };

  return (
    <article className="monster">
      <div className="btnWrapper">
        <button onClick={() => navigate("/")}>Back to Monsters List</button>
      </div>
      <Card id={monster.id} name={monster.name} email={monster.email} />
      <div className="btnWrapper">
        <button onClick={clickPrevious}>Previous</button>
        <button onClick={clickNext}>Next</button>
      </div>
    </article>
  );
}

export default Monster;
