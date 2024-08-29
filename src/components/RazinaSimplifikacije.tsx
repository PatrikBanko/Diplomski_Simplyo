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
          {/* <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg> */}
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
