import React from "react";
import ReactDOM from "react-dom";
import { Form} from "./Contact";
import {Nav,SetBackground} from "../../Home/src/Header";
import {Footer} from "../../Home/src/Footer";
import "./index.css";

const App = () => (
  <div className="container">
    <Nav/><br/><br/><br/><br/><br/><br/><br/>
    <Form/><br/><br/><br/><br/><br/><br/>
    <SetBackground/><br/><br/>
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
