import { useState } from "react";
import Heading from "./Heading";
import { v4 as uuid } from "uuid";
import { Navigate, useNavigate } from "react-router-dom";

const CreateHabit = (props) => {
  const { handleAddHabit } = props;
  const uniqueId = uuid();
  const [heading] = useState("Create Habit :");
  const [name, setName] = useState("enter a new habit:");
  const navigate = useNavigate();

  // Function to get a date string for the previous day
  function getPreviousDay(date) {
    const currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() - 1);
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const handleForm = (e) => {
    e.preventDefault();
    const newSubArray = [];
    const currentDate = new Date();
    for (let i = 0; i < 7; i++) {
      newSubArray.push({
        date: getPreviousDay(currentDate.toISOString().split("T")[0]), // Start with the current date
        status: null,
      });
      currentDate.setDate(currentDate.getDate() - 1);
    }
    handleAddHabit({
      id: uniqueId,
      name,
      status: null,
      updateHistory: newSubArray,
    });

    navigate(-1);
  };
  return (
    <>
      <Heading heading={heading} />
      <form onSubmit={(e) => handleForm(e)}>
        <input
          placeholder={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <button>ADD</button>
      </form>
    </>
  );
};
export default CreateHabit;
