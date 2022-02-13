import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from "./styles/global";
import { Main } from "./pages/Main/Main";
import { NavbarFull } from "./components/NavbarFull";
import { FooterFull } from "./components/FooterFull";

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <NavbarFull />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
    <FooterFull />
  </React.StrictMode>,
  document.getElementById('root')
);