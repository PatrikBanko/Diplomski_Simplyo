import { Outlet, Link } from "react-router-dom";
import "../styles/Pocetna.css";

function Pocetna() {
  return (
    <div className="pocetna">
      <h1>Simplyo</h1>

      <p>Simplify your text, amplify your understanding.</p>

      <Link to={"/simplifikator/"} className="zapocni-link">
        <button className="btn zapocni-btn">Započni</button>
      </Link>
    </div>
  );
}

export default Pocetna;
