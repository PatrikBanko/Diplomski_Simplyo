// import { Outlet, Link } from "react-router-dom";
//import { useSimplifiedTextContext } from "../components/SimplificiraniTekstContext";

import PovratakButton from "../components/PovratakButton";
import PovijestRecord from "../components/PovijestRecord";
import Navigacija from "../components/Navigacija";

import { useSimplifiedTextContext } from "../components/SimplificiraniTekstContext";

import "../styles/Povijest.css";

export default function Povijest() {
  const { simplifiedTexts } = useSimplifiedTextContext();

  return (
    <div className="povijest">
      <div className="povijest-povratak-btn-container">
        <PovratakButton />
      </div>

      <div className="povijest-record-container">
        {/* <h2>Posljednja dva pojednostavljena teksta</h2>
        <ul>
          {simplifiedTexts.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul> */}
        <PovijestRecord />
        <PovijestRecord />

      </div>

      <footer className="povijest-navigacija">
        <div className="povijest-navigacija-container">
          <Navigacija />
        </div>
      </footer>
    </div>
  );
}
