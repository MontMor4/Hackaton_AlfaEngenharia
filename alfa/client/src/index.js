import React from "react";
import ReactDOM from "react-dom/client";
//import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import "./index.css";
import CadastroCandidatos from "./Pages/CadastroCandidatos";
import CadastrarReport from "./Pages/CadastrarReport";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ChakraProvider>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
