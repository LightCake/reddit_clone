import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Posts from "./components/Posts/Posts";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <SignIn />
      <SignUp />
      <Switch>
        <Route exact path={["/", "/r/:sub"]} component={Posts} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
