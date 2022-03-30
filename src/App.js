import "./App.css";
import React from "react";
import styled from "styled-components";
import Nemo from "./Nemo";
import Button from "./Button";
import Circle from "./Circle";

const list = ["산책하기", "코딩공부하기", "등산하기"];

const App = () => {
  return (
    <div className="App">
      <Nemo />
      <Button list={list} />
      <Circle />
    </div>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <Nemo />
//     </div>
//   );
// }

export default App;
