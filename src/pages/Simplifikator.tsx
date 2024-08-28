import PovratakButton from "../components/PovratakButton";
import Navigacija from "../components/Navigacija";
import RazinaSimplifikacije from "../components/RazinaSimplifikacije";
import UlazniTekst from "../components/UlazniTekst";
import IzlazniTekst from "../components/IzlazniTekst";

import "../styles/Simplifikator.css";

export default function Simplifikator() {
  return (
    <div className="simplifikator">
      <div className="simplifikator-povratak-btn">
        <PovratakButton />
      </div>

      <div className="simplifikator-level-I-O">
        <div className="simplifikator-level">
          <RazinaSimplifikacije />
        </div>
        <div className="simplifikator-I">
          <UlazniTekst />
        </div>
        <div className="simplifikator-O">
          <IzlazniTekst />
        </div>
      </div>

      <div className="simplifikator-navigacija">
        <Navigacija />
      </div>
    </div>
  );
}
