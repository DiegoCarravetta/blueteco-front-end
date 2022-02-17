import axios from "axios";
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cadastro } from "./pages/Cadastro";
import { FooterFull } from "./components/FooterFull";
import { GlobalStyles } from "./styles/global";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main/Main";
import { NavbarFull } from "./components/NavbarFull";
import { Usuario } from "./pages/Usuario";

import 'bootstrap/dist/css/bootstrap.min.css';

// aqui vai o dendreço da minha api (mas ela não está funcionando)
axios.defaults.baseURL = 'https://c010-m04-fls-sneslib-api.herokuapp.com/api/';
axios.defaults.headers.post["Content-Type"] = "application/json";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <NavbarFull />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/usuario" element={<Usuario />} />
      </Routes>
    </BrowserRouter>
    <FooterFull />
  </React.StrictMode>,
  document.getElementById('root')
);