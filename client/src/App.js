import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Posts from "./components/Posts/Posts";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path={["/", "/r/:sub"]} component={Posts} />
    </BrowserRouter>
  );
};

export default App;
