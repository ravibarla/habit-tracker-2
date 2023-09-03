import { useState } from "react";
import Heading from "./Heading";

const CreateHabit = () => {
  const [heading] = useState("Create Habit :");
  return (
    <>
      <Heading heading={heading} />
      <input placeholder="enter the habit" />
      <button>ADD</button>
    </>
  );
};
export default CreateHabit;
