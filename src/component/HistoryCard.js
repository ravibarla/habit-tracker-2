import { useParams } from "react-router-dom";
const HistoryCard = (props) => {
  const { data, handleUpdateHabit } = props;
  const { habitId } = useParams();

  return (
    <div
      className="border bg-primary"
      onClick={(e) => handleUpdateHabit(habitId, data.date, data.status)}
    >
      <p>{data.date}</p>
      <p>{data.status}</p>
    </div>
  );
};
export default HistoryCard;
