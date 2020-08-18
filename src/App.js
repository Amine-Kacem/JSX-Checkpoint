import React from "react";
import "./App.css";
import "./style.css";

function App() {
  return (
    <div className="App">
      <div
        style={{
          border: "solid 1px black",
          maxwidth: "100px",
        }}
      >
        <h1 className="title"> Welcome to GMC </h1>

        <img src="/go.jpg" alt="go.jpg" />

        <img src="/public.png" />
      </div>

      <video width="320" height="240" controls />

      <source src="/src/GMC.mp4" type="video/mp4" />
    </div>
  );
}

export default App;
