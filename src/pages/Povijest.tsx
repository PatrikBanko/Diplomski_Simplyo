// import { Outlet, Link } from "react-router-dom";

import PovratakButton from "../components/PovratakButton";
import PovijestRecord from "../components/PovijestRecord";
import Navigacija from "../components/Navigacija";

import "../styles/Povijest.css";

export default function Povijest() {
  return (
    <div className="povijest">
      <div className="povijest-povratak-btn-container">
        <PovratakButton />
      </div>

      <div className="povijest-record-container">
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
