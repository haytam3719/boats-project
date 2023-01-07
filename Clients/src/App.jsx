import React from "react";
import ReactDOM from "react-dom";
import {Nav,SetBackground} from "../../Home/src/Header";
import {Footer} from "../../Home/src/Footer";
import "./index.scss";
import {SetClientsTable} from "./Clients_Table";
const App = () => (
   <div><Nav/><br/><br/><br/><br/><br/><br/><SetClientsTable/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><SetBackground/><br/><br/><br/><br/><br/><br/><br/><br/><br/><Footer/></div>
);
ReactDOM.render(<App />, document.getElementById("app"));