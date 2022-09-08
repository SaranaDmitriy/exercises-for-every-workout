import React, { useState } from "react";
import "./style.css";
import pencilIcon from "../../icon/pencil.png";
import saveIcon from "../../icon/save.png";
import deleteIcon from "../../icon/delete.png";
import backIcon from "../../icon/back.png"
import { getDatabase, ref, update } from "firebase/database";

export default function WorkoutListVarItem(props) {
  let editedExercise = React.createRef();
  const [inEditState, setInEditState] = useState(false);
  
  const db = getDatabase();
  const updates = {};
  const saveСhanges = () => {
    const editedExerciseVal = editedExercise.current.value;
    updates[`${props.path}/${props.index}`] = editedExerciseVal;
    return update(ref(db), updates);
  };

  return (
    <>
      <li className="list-item">
        
        {!inEditState ? (
          <>
          <span>{props.elem}</span>
          <img src={pencilIcon} alt="pen" onClick={() => (inEditState ? setInEditState(false) : setInEditState(true))} />
          </>
          ) : (
            <div className="exercise-editor">
              <input type="text" defaultValue={props.elem} ref={editedExercise} />
              <div className="icons">
                <div>
                  <img src={backIcon} alt="back" onClick={()=> (inEditState ? setInEditState(false) : setInEditState(true))} />
                </div>
                <div>
                  <img src={saveIcon} alt="save" onClick={saveСhanges} />
                  <img src={deleteIcon} alt="delete" onClick={props.deleteExercise} />
                </div>
              </div>
            </div>
          )}
        
      </li>
    </>
  );
}
