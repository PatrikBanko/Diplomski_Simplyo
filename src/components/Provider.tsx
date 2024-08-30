import { useContext } from 'react';
import { SimplifiedTextContext } from './SimplificiraniTekstContext';

export default function Provider({ children }) {
    const level = useContext(SimplifiedTextContext);
    return (
        <section className="section">
            <SimplifiedTextContext.Provider value={level}>
                {children}
            </SimplifiedTextContext.Provider>
        </section>
    );
}