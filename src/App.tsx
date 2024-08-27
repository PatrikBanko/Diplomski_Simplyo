// import { useState } from 'react'
import './App.css'
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Pocetna from './pages/Pocetna';
import Simplifikator from './pages/Simplifikator';
import Povijest from './pages/Povijest';

function App() {

  return (
    <>
      <h1>App rendering test</h1>
      <Routes>
        <Route path="/" element={<Pocetna />} />
        <Route path="about" element={<Simplifikator />} />
        <Route path="dashboard" element={<Povijest />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </>
  )
}

export default App
