import useFirebaseData from "../../firebaseData";
import WorkoutListVariant from "../workoutListVariant";

export default function WorkoutList(props) {
  const data = useFirebaseData();

  const date = new Date();
  const dayWeek = date.getDay();

  const dayIndex = data && data.trainingProgram.findIndex((item) => item.days.includes(dayWeek));
  const dayData = data && data.trainingProgram[dayIndex];

  return (
    <>
      {/* <div>
        <label htmlFor="daySelection">Выбор дня</label>
        <select name="day" id="daySelection" onChange={(e) => setDay(e.target.value)}>
          <option value="-">-</option>
          <option value="1">Понедельник</option>
          <option value="2">Вторник</option>
          <option value="3">Среда</option>
          <option value="4">Четверг</option>
          <option value="5">Пятница</option>
          <option value="6">Суббота</option>
        </select>
      </div> */}
      <div>
        {dayData ? dayData.exercises.map((elem, index) =>
          
          <WorkoutListVariant
            
          key={elem.title}
          group={elem}
          dayWeek={dayWeek}
          path={`trainingProgram/${dayIndex}/exercises/${index}`}/>
          )
        : <h2>Выбери день</h2> }
      </div>
    </>
  );
}
