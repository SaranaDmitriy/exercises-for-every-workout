import React from "react";
import pencil from "../../icon/pencil.png";
import "../../style/workoutListVarItem.css";

export default function WorkoutListVarItem(props) {
  const exerciseEditor = () => {
    return (
      <div className="exerciseEditor">
        <input type="text"></input>
        <div></div>
        <div></div>
      </div>
    );
  };

  return (
    <li className="list-item" key={props.index}>
      <span>{props.elem}</span>
      <img src={pencil} alt="pen" onClick={exerciseEditor} />
    </li>
  );
}
