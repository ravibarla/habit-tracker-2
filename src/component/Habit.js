// import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Habit = (props) => {
  const { habit } = props;
  const navigate = useNavigate();
  return (
    <>
      <div className="border" onClick={() => navigate(`tracker/${habit.id}`)}>
        {habit.name}
      </div>
    </>
  );
};

export default Habit;
