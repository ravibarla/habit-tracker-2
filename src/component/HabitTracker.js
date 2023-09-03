import { useParams } from "react-router-dom";
import Heading from "./Heading";
import HistoryCard from "./HistoryCard";
import { useNavigate } from "react-router-dom";
const HabitTracker = (props) => {
  const { habits } = props;
  const { habitId } = useParams();
  const selectedHabit = habits.filter((habit) => habit.id === habitId);
  const Navigate = useNavigate();
  return (
    <div>
      <Heading heading={selectedHabit[0].name} />
      <div className="d-flex justify-content-center">
        {selectedHabit[0].updateHistory.map((data) => (
          <HistoryCard data={data} />
        ))}
      </div>
      {/* <HistoryCard /> */}
      <button onClick={() => Navigate(-1)}>back</button>
      <button>Remove</button>
    </div>
  );
};
export default HabitTracker;
