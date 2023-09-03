import { useParams } from "react-router-dom";
const HistoryCard = (props) => {
  const { data } = props;
  const { habitId } = useParams();

  return (
    <div
      className="border bg-primary"
      onClick={() => console.log("clicked id:", habitId, data.date)}
    >
      <p>{data.date}</p>
      <p>{data.status}</p>
    </div>
  );
};
export default HistoryCard;
