import { Outlet, Link } from "react-router-dom";

import PovijestRecord from '../components/PovijestRecord'
import Navigacija from '../components/Navigacija'


export default function Povijest() {
    return (
        <div className='povijest'>
            <Link to={'/simplifikator/'}><button>Povratak</button></Link>
            <h1>Povijest</h1>
            <PovijestRecord />
            <Navigacija />
        </div>
    );
}