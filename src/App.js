import React from "react";
import "./style.css";
import { Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";

import Nemo from "./Nemo";
import Button from "./Button";
import Header from "./Header";
import EditPage from "./EditPage";
import NotFound from "./NotFound";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Nemo />
          </Route>
          <Route path="/EditPage/:idx" exact>
            <EditPage />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Button />
      </div>
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
