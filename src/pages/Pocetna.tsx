import { Outlet, Link } from "react-router-dom";


function Pocetna() {
    return (
        <div className="pocetna">
            <h1>Simplyo</h1>

            <p>Simplify your text, amplify your understanding.</p>

            <Link to={'/simplifikator/'}>
                <button>Započni</button>
            </Link>
        </div>
    );
}

export default Pocetna