import React, { useState } from "react";
import "../styles/RazinaSimplifikacije.css";

interface RazinaSimplifikacijeProps {
  onChange: (razina: string) => void;
}

const RazinaSimplifikacije: React.FC<RazinaSimplifikacijeProps> = ({
  onChange,
}) => {
  const [odabranaRazina, setOdabranaRazina] = useState<string>("");

  const handleOdabranaRazinaChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const razina = event.target.value;
    setOdabranaRazina(razina);
    onChange(razina);
  };

  return (
    <div className="razina-simplifikacije">
      <select
        id="options"
        className="dropdown-select"
        value={odabranaRazina}
        onChange={handleOdabranaRazinaChange}
      >
        <option value="" disabled selected>
          Razina simplifikacije
        </option>
        <option value="niska">Niska</option>
        <option value="balansirana">Balansirana</option>
        <option value="visoka">Visoka</option>
      </select>
    </div>
  );
};

export default RazinaSimplifikacije;
