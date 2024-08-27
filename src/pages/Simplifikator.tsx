import { Outlet, Link } from "react-router-dom";

import Navigacija from '../components/Navigacija'
import RazinaSimplifikacije from '../components/RazinaSimplifikacije'
import UlazniTekst from '../components/UlazniTekst';
import IzlazniTekst from '../components/IzlazniTekst';


export default function Simplifikator() {
    return (
        <div className='simplifikator'>
            <Link to={'/'}><button>Povratak</button></Link>

            <h1>Simplifikator</h1>
            <div className="razina-simplifikacije">
                <RazinaSimplifikacije />
            </div>

            <div className="ulaz-izlaz">
                <UlazniTekst />
                <IzlazniTekst />
            </div>

            <div className="navigacija">
                <Navigacija />
            </div>

        </div>
    );
}