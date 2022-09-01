import WorkoutList from "../workoutList";
import "../../style/workout.css";

export default function Workout() {
  return (
    <div>
      <h1>Список рекомендованых упражнений на сегодня: </h1>
      <WorkoutList />
    </div>
  );
}
