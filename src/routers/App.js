import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Work from "../components/Work";

export default () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/portfolio/:id" component={Work} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  </BrowserRouter>
);
