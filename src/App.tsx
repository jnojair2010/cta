// instalando dependências de rotas npm install react-router-dom  ou npm i -D react-router-dom
// recomendado instalar a dependência da rota npm install react-router-dom localforage match-sorter sort-by

import React, { Children } from 'react';
import { BrowserRouter, Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Contato from './pages/contato/contato';
import Home from './pages/home/home';
import Menu from './menu/divmenu';
import './App.css';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/home",
    element: <Home />
  },
  {
    path:"/contato",
    element:<Contato />
  }

]);


function App() {
  return (

    <div>
        <Menu />
     < RouterProvider router={router} />

    </div>

  );
}

export default App;

