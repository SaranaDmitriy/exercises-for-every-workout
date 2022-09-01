import { useState } from "react";
import "../../style/workoutListVariant.css";
import WorkoutListVarItem from "../workoutListVarItem";

export default function WorkoutListVariant(props) {
  const [variant, setVariants] = useState(0);
  /*--------------------------*/
  // let currentdate = new Date();
  // let oneJan = new Date(currentdate.getFullYear(), 0, 1);
  // let numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
  // let result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
  // let myVariants = result % 2 === 0 ? 0 : 1;
  // const workoutVariant = props.group.variants[myVariants];
  /*--------------------------*/
  const workoutVariant = props.group.variants[variant];
  return (
    <div className="exercise-group">
      <h2 className="text-group"> {props.group.title}</h2>
      <div>
        <select className="select-css" name="day" id="workoutSelection" onChange={(e) => setVariants(e.target.value)} value={variant}>
          {props.group.variants.map((elem, index) => (
            <option value={index} key={index + 1}>
              Вариант {index + 1}
            </option>
          ))}
        </select>
      </div>
      <ul className="list">
        {workoutVariant.map((elem, index) => (
          <WorkoutListVarItem key={index} elem={elem} index={index} />
        ))}
      </ul>
    </div>
  );
}
