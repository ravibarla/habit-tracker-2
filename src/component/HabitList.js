import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import Heading from "./Heading.js";
import Habit from "./Habit.js";
const HabitList = (props) => {
  const { habits } = props;
  const navigate=useNavigate()
  const [heading] = useState("Activity List");
  return (
    <div>
      <Heading heading={heading} />
      {habits.map((habit, i) => (
        <Habit habit={habit} key={i} />
      ))}
      <button onClick={()=>navigate("create")}>Create</button>
    </div>
  );
};
export default HabitList;
