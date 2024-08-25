import React, { useState } from "react";

import "./App.css";
function App() {
  const [activityValue, setActivityValue] = useState<string>("");
  const [descValue, setDescValue] = useState<string>("");

  const [storedValues, setStoredValues] = useState<
    { activity: string; description: string }[]
  >([]);

  const handleActivityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActivityValue(event.target.value); // Update the input value state
  };

  const handleDescChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescValue(event.target.value); // Update the input value state
  };

  const handleButtonClick = () => {
    if (activityValue) {
      console.log(activityValue);

      setStoredValues([
        ...storedValues,
        { activity: activityValue, description: descValue },
      ]);
      setActivityValue("");
      setDescValue("");
    }
  };

  const handleDelete = (index: number) => {
    setStoredValues(storedValues.filter((_, i) => i !== index));
  };

  return (
    <div id="main">
      <header>To-Do List</header>
      <div id="list-box">
        <div id="input-box">
          <input
            placeholder="Activity"
            type="text"
            value={activityValue}
            onChange={handleActivityChange}
          />
          <input
            id="desc"
            placeholder="Description"
            type="text"
            value={descValue}
            onChange={handleDescChange}
          />
          <button onClick={handleButtonClick}>Enter</button>
        </div>

        <div id="list">
          <div className="top-row">
            <p>Activity</p>
            <p>Done?</p>
          </div>
          {storedValues.map((value, index) => {
            return (
              <div className="row" key={index}>
                <div id="values">
                  <h2>{value.activity}</h2>
                  <p>{value.description}</p>
                </div>

                <button onClick={() => handleDelete(index)}>Done?</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
