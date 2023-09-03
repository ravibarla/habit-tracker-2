import "../App.css";
import { useState } from "react";
import { data } from "../resource/data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import HabitList from "./HabitList";
import HabitTracker from "./HabitTracker";
// import Habit from "./Habit";
function App() {
  const [habits, setHabits] = useState(data);
  //create habit handler
  const addHabit = () => {};
  //update habit handler
  const updateHabit = () => {};
  //delete habit handler
  const deleteHabit = () => {};
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
            path="tracker/:habitId"
            element={<HabitTracker habits={habits} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
