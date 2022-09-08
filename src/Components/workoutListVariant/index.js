import { useState } from "react";
import "./style.css";
import WorkoutListVarItem from "../workoutListVarItem";
import addIcon from "../../icon/add.png";
import { getDatabase, ref, update } from "firebase/database";

export default function WorkoutListVariant(props) {
  const [variant, setVariants] = useState(0);
  const workoutList = props.group.variants[variant];

  /* ------------ Изменения --------------- */
  const db = getDatabase();
  const copy = [...workoutList]
  /* ADD NEW EXERCISE */
  const addExercise = () => {
    copy.push('Новое упражнение')
    const updates = {
      [`${props.path}/variants/${variant}`]: copy
    };
    return update(ref(db), updates);
  };

  /* DELETE EXERCISE */
  const deleteExercise = (index) => {  
    copy.splice(index, 1)
    const updates = {
      [`${props.path}/variants/${variant}`]: copy
    };
    return update(ref(db), updates);
  };

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
        {workoutList.map((elem, index) => (
          <WorkoutListVarItem
            key={elem}
            elem={elem}
            index={index}
            path={`${props.path}/variants/${variant}`}
            deleteExercise={()=> deleteExercise(index)}
            />
        ))}
      </ul>
      <div className="add-exercise" onClick={addExercise}>
        <img src={addIcon} alt="add" />
        <span>Добавить новое упражнение</span>
      </div>
    </div>
  );
}

 /*-- РЕАЛИЗАЦИЯ БЕЗ ВЫБОРА ВАРИАНТА --*/
  // let currentdate = new Date();
  // let oneJan = new Date(currentdate.getFullYear(), 0, 1);
  // let numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
  // let result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
  // let myVariants = result % 2 === 0 ? 0 : 1;
  // const workoutVariant = props.group.variants[myVariants];
  /*--------------------------*/