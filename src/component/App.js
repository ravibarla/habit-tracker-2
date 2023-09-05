import "../App.css";
import { useEffect, useState } from "react";
import { data } from "../resource/data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import HabitList from "./HabitList";
import HabitTracker from "./HabitTracker";
import CreateHabit from "./CreateHabit";
// import Habit from "./Habit";
function App() {
  const [habits, setHabits] = useState(data);
  const [status, setStatus] = useState(null);
  const [newUpdateHistory, setNewUpdateHistory] = useState({});
  useEffect(() => console.log(habits), [habits]);
  //create habit handler
  const addHabit = (newHabit) => {
    setHabits([...habits, newHabit]);
    console.log(habits);
  };
  //update status
  // const updateStatus = (status) => {
  //   console.log("current sattus :", status);

  //   setStatus((status) => (status === "done" ? "not done" : "done"));
  //   // setStatus("asvS");
  //   // if (currentStatus === "done") {
  //   // } else {
  //   //   setStatus("done");
  //   // }

  //   console.log("status 1:", status);
  // };

  //update habit handler
  const updateHabit = (id, date, currentStatus) => {
    const newstatus = currentStatus === "done" ? "not done" : "done";
    console.log(newstatus);
    const a1 = habits.map((habit) =>
      habit.id === id
        ? {
            ...habit,
            updateHistory: habit.updateHistory.map((data) =>
              data.date === date
                ? { ...data, status: newstatus } // Replace 20 with the desired marks
                : data
            ),
          }
        : habit
    );
    // console.log(a1);
    setHabits(a1);
  };
  //delete habit handler
  const removeHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<HabitList habits={habits} setHabits={setHabits} />}
          />
          <Route
            exact
            path="tracker/:habitId"
            element={
              <HabitTracker
                habits={habits}
                handleRemoveHabit={removeHabit}
                handleUpdateHabit={updateHabit}
              />
            }
          />
          <Route
            exact
            path="create"
            element={<CreateHabit handleAddHabit={addHabit} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
