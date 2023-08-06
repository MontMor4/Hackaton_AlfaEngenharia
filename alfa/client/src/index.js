import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CadastroCandidatos from "./CadastroCandidatos";
import CadastrarReport from "./CadastrarReport";
import Home from "./Home";
import Login from "./Login";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <React.StrictMode>
      <CadastrarReport />
    </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
