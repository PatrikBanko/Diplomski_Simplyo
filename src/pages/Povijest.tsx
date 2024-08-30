// import { Outlet, Link } from "react-router-dom";

import PovratakButton from "../components/PovratakButton";
import PovijestRecord from "../components/PovijestRecord";
import Navigacija from "../components/Navigacija";
import { useSimplifiedTextContext } from "./SimplificiraniTekstContex";

import "../styles/Povijest.css";

export default function Povijest() {
  const { simplifiedTexts } = useSimplifiedTextContext();

  return (
    <div className="povijest">
      <div className="povijest-povratak-btn-container">
        <PovratakButton />
      </div>

      <div className="povijest-record-container">
        {/* <PovijestRecord />
        <PovijestRecord /> */}
        {simplifiedTexts.length === 0 ? (
          <p>Nema dostupnih tekstova.</p>
        ) : (
          simplifiedTexts.map((text, index) => (
            <PovijestRecord key={index} outputTekst={text} />
          ))
        )}
      </div>

      <footer className="povijest-navigacija">
        <div className="povijest-navigacija-container">
          <Navigacija />
        </div>
      </footer>
    </div>
  );
}
