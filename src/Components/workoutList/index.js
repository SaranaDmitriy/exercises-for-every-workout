import { useState } from "react";
import useFirebaseData from "../../firebaseData";
import WorkoutListVariant from "../workoutListVariant";

export default function WorkoutList(props) {
  // const [day, setDay] = useState();
  const data = useFirebaseData();

  let date = new Date();
  // let dayWeek = [7, 1, 2, 3, 4, 5, 6][date.getDay()];
  let dayWeek = date.getDay();

  const dayData = data && data.find((item) => item.days.includes(dayWeek));

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
      <div>{dayData ? dayData.exercises.map((elem, index) => <WorkoutListVariant key={index} group={elem} />) : <h2>Выбери день</h2>}</div>
    </>
  );
}

// export default function WorkListItem(props) {
//   const [day, setDay] = useState();
//   const data = useFirebaseData();

//   let date = new Date();
//   let dayWeek = [7, 1, 2, 3, 4, 5, 6][date.getDay()];
//   console.log(dayWeek);

//   const dayData = data && data.find((item) => item.days.includes(+day));

//   return (
//     <>
//       <div>
//         <label htmlFor="daySelection">Выбор дня</label>
//         <select name="day" id="daySelection" onChange={(e) => setDay(e.target.value)}>
//           <option value="-">-</option>
//           <option value="1">Понедельник</option>
//           <option value="2">Вторник</option>
//           <option value="3">Среда</option>
//           <option value="4">Четверг</option>
//           <option value="5">Пятница</option>
//           <option value="6">Суббота</option>
//         </select>
//       </div>
//       <div>{dayData ? dayData.exercises.map((elem, index) => <WorkListItemVariant key={index} group={elem} />) : <h2>Выбери день</h2>}</div>
//     </>
//   );
// }
