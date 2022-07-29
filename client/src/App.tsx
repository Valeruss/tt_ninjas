import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import AppRouter from './components/AppRouter/AppRouter';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
