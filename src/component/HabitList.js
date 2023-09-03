import { useState } from "react";
import CreateHabit from "./CreateHabit.js";
import Heading from "./Heading.js";
import Habit from "./Habit.js";
const HabitList = (props) => {
  const { habits } = props;
  const [heading] = useState("Activity List");
  return (
    <div>
      <Heading heading={heading} />
      {habits.map((habit, i) => (
        <Habit habit={habit} key={i} />
      ))}
      <button>Create</button>
    </div>
  );
};
export default HabitList;
