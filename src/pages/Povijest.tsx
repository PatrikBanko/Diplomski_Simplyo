import PovratakButton from "../components/PovratakButton";
import PovijestRecord from "../components/PovijestRecord";
import Navigacija from "../components/Navigacija";

import { useSimplifiedTextContext } from "../components/SimplificiraniTekstContext";

import "../styles/Povijest.css";
import { useState } from "react";

export default function Povijest() {
  const { simplifiedTexts } = useSimplifiedTextContext();
  const [outputTekst, setOutputTekst] = useState("");

  return (
    <div className="povijest">
      <div className="povijest-povratak-btn-container">
        <PovratakButton />
      </div>

      <div className="povijest-record-container-outer">
        {simplifiedTexts.length === 0 ? (
          <p>Nema sačuvanih pojednostavljenih tekstova.</p>
        ) : simplifiedTexts.length === 1 ? (
          <div className="povijest-record-container">
            <PovijestRecord
              outputTekst={simplifiedTexts[0]}
              setOutputTekst={() => {}}
            />
          </div>
        ) : (
          <div className="povijest-record-container">
            <PovijestRecord
              outputTekst={simplifiedTexts[0]}
              setOutputTekst={setOutputTekst}
            />
            <PovijestRecord
              outputTekst={simplifiedTexts[1]}
              setOutputTekst={setOutputTekst}
            />
          </div>
        )}
      </div>

      <footer className="povijest-navigacija">
        <div className="povijest-navigacija-container">
          <Navigacija />
        </div>
      </footer>
      <div style={{ display: "none" }}>{outputTekst}</div>
    </div>
  );
}
