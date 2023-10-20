// instalando dependências de rotas npm install react-router-dom  ou npm i -D react-router-dom
// recomendado instalar a dependência da rota npm install react-router-dom localforage match-sorter sort-by

import React, { Children } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import Home from './header/pages/home/home';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;


    /*<div className="App">
        <Home />
   
    </div>*/