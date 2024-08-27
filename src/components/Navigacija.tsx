import { Outlet, Link, NavLink } from "react-router-dom";
import '../styles/Navigacija.css';


export default function Navigacija() {
    return (
        <div className="navigacija">

            <Link to={'/'}>
                <button className="btn pocetna">Početna</button>
            </Link>

            <Link to={'/simplifikator/'}>
                <button className="btn simplifikator">Simplifikator</button>
            </Link>

            <Link to={'/povijest/'}>
                <button className="btn povijest">Povijest</button>
            </Link>

            <button className="btn ocisti">Očisti</button>
        </div>
    );
}