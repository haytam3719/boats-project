import React from "react";
import ReactDOM from "react-dom";
import { Nav,SetBackground} from "./Header";
import {Footer} from "./Footer";
import { SetCarousel } from "./Caroussel";
import { SetClientTable } from "./Clients";
import { SetBoatsTable } from "./Boats";
import "./index.css";

const App=()=>{
  return (<div><Nav/><br/><br/><br/><br/><br/><br/><br/><br/><SetClientTable/><br/><br/><br/><SetBackground/><br/><br/><br/><br/><br/><SetBoatsTable/><br/><br/><br/><br/><br/><br/><br/><Footer/></div>);
}
ReactDOM.render(<App />, document.getElementById("app"));
