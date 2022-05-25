import React, { useState, useEffect } from "react";
import CardList from "./CardList/CardList";
import "./Monsters.scss";

function Monsters() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setMonsters(res));
  }, []);

  return (
    <div className="monsters">
      <h1>Assignment - Dynamic Routing</h1>
      <CardList monsters={monsters} />
    </div>
  );
}

export default Monsters;
