// import { useState } from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Pocetna from "./pages/Pocetna";
import Simplifikator from "./pages/Simplifikator";
import Povijest from "./pages/Povijest";
import { SimplifiedTextProvider } from "./pages/SimplificiraniTekstProvider";

function App() {
  return (
    <SimplifiedTextProvider>
      <Routes>
        <Route path="/" element={<Pocetna />} />
        <Route path="simplifikator" element={<Simplifikator />} />
        <Route path="povijest" element={<Povijest />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </SimplifiedTextProvider>
  );
}

export default App;
