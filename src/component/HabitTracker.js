import { useParams, useNavigate } from "react-router-dom";
import Heading from "./Heading";
import HistoryCard from "./HistoryCard";
const HabitTracker = (props) => {
  const { habits, handleRemoveHabit } = props;
  const { habitId } = useParams();
  const selectedHabit = habits.filter((habit) => habit.id === habitId);
  // debugger;
  const navigate = useNavigate();
  const removeHabit = () => {
    handleRemoveHabit(habitId);
    navigate(-1);
  };
  return (
    <div>
      {selectedHabit.length > 0 && (
        <>
          <Heading heading={selectedHabit[0].name} />
          <div className="d-flex justify-content-center">
            {selectedHabit[0].updateHistory.map((data) => (
              <HistoryCard data={data} />
            ))}
          </div>
          {/* <HistoryCard /> */}
          <button onClick={() => navigate(-1)}>back</button>
          <button onClick={removeHabit}>Remove</button>
        </>
      )}
    </div>
  );
};
export default HabitTracker;
