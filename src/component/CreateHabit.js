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

  const handleForm = (e) => {
    e.preventDefault();
    handleAddHabit({
      id: uniqueId,
      name,
      status: null,
      updateHistory: [
        {
          date: "2023-09-04",
          status: null,
        },
        {
          date: "2023-09-03",
          status: null,
        },
        {
          date: "2023-09-02",
          status: null,
        },
        {
          date: "2023-09-01",
          status: null,
        },
      ],
    });

    navigate(-1);
  };
  return (
    <>
      <Heading heading={heading}/>
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
