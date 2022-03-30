import "./App.css";
import React from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import Nemo from "./Nemo";
import Button from "./Button";
import Circle from "./Circle";
import Header from "./Header";
import Cat from "./Cat";
import Dog from "./Dog";

const list = ["산책하기", "코딩공부하기", "등산하기"];

const App = () => {
  return (
    <div className="App">
      <div>
        <Link to="/">Header로 가기</Link>
        <Link to="/Cat">Cat으로 가기</Link>
        <Link to="/Dog">Dog으로 가기</Link>
      </div>

      <Route path="/" exact>
        <Header />
      </Route>
      <Route path="/Cat" exact component={Cat}>
        {/* cat_name 은 동적으로 바꿀거야 -> 동적 라우팅 */}
        {/* <Cat /> */}
      </Route>
      <Route path="/Dog" exact component={Dog}></Route>
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
