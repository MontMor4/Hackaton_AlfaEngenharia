import React from "react";
import ReactDOM from "react-dom/client";
//import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import "./index.css";
import CadastroCandidatos from "./PaginasExterno/CadastroCandidatos";
import CadastrarReport from "./PaginasExterno/CadastrarReport";
import Home from "./PaginasExterno/Home";
import Login from "./PaginasExterno/Login";
import NavbarInt from "./PaginasInterno/NavbarInt";
import Candidatos from "./PaginasInterno/Candidatos";
import Equipamentos from "./PaginasInterno/Equipamentos";
import Reports from "./PaginasInterno/Reports";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/CadastroCandidatos",
    element: <CadastroCandidatos/>,
  },
  {
    path: "/CadastrarReport",
    element: <CadastrarReport/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/Candidatos",
    element: <Candidatos/>,
  },
  {
    path: "/Reports",
    element: <Reports/>,
  },
  {
    path: "/Equipamentos",
    element: <Equipamentos/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ChakraProvider>
    <React.StrictMode>
      <RouterProvider router ={router}/>
    </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
