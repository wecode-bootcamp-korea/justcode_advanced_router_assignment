import React, { useState } from "react";
import Card from "../../components/Card/Card";
import "./Monster.scss";

function Monster() {
  const [monster, setMonster] = useState({});

  return (
    <article className="monster">
      <div className="btnWrapper">
        <button>Back to Monsters List</button>
      </div>
      <Card />
      <div className="btnWrapper">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </article>
  );
}

export default Monster;
