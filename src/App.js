import "./App.css";
import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";

import Nemo from "./Nemo";
import Button from "./Button";
import Circle from "./Circle";
import Header from "./Header";
import EditPage from "./EditPage";
import NotFound from "./NotFound";

const list = ["산책하기", "코딩공부하기", "등산하기"];

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Nemo />
        </Route>
        <Route path="/EditPage" exact>
          <EditPage />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
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
