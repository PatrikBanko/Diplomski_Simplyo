import { Outlet, Link, NavLink } from "react-router-dom";


export default function Navigacija() {
    return (
        <div className="navigacija">

            <Link to={'/'}>
                <button>Početna</button>
            </Link>

            <Link to={'/simplifikator/'}>
                <button>Simplifikator</button>
            </Link>

            <Link to={'/povijest/'}>
                <button>Povijest</button>
            </Link>

            <button>Očisti</button>
        </div>
    );
}