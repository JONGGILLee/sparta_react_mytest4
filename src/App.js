import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Nemo from "./Nemo";
import Button from "./Button";
import Circle from "./Circle";
import Header from "./Header";
import Cat from "./Cat";

const list = ["산책하기", "코딩공부하기", "등산하기"];

const App = () => {
  return (
    <div className="App">
      <Route path="/" exact>
        <Header />
      </Route>
      <Route path="/Cat/:cat_name" exact>
        {/* cat_name 은 동적으로 바꿀거야 -> 동적 라우팅 */}
        <Cat />
      </Route>
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
