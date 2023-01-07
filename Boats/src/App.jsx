import React from "react";
import ReactDOM from "react-dom";
import {Nav,SetBackground} from "../../Home/src/Header";
import {Footer} from "../../Home/src/Footer";
import "./index.scss";
import { SetBoatsTable } from "../../Home/src/Boats";

const App = () => (
  <div><Nav/><br/><br/><br/><br/><br/><br/><br/><br/><br/><SetBoatsTable/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><SetBackground/><br/><br/><br/><br/><br/><br/><br/><br/><br/><Footer/></div>
);
ReactDOM.render(<App />, document.getElementById("app"));
