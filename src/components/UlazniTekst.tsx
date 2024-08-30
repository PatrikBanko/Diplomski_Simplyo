import React from "react";
import "../styles/UlazniTekst.css";

interface UlazniTekstProps {
  inputTekst: string;
  setInputTekst: (value: string) => void;
  onSimplificiraj: () => void;
}

const UlazniTekst: React.FC<UlazniTekstProps> = ({
  inputTekst,
  setInputTekst,
  onSimplificiraj,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputTekst(event.target.value);
  };

  const resetTextarea = () => {
    setInputTekst("");
  };

  const handleSimplificiraj = () => {
    onSimplificiraj();
  };

  return (
    <div className="ulazni-tekst">
      <div className="ulaz-header">
        {/* <textarea name="" id="" placeholder="Upiši tekst..."></textarea> */}
        <textarea
          placeholder="Unos teksta..."
          rows={3}
          className="unos-textarea"
          value={inputTekst}
          onChange={handleChange}
        ></textarea>
        <button className="zatvori-btn" onClick={resetTextarea}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="ulaz-footer">
        <button className="diktat-btn">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_5_205)">
              <path
                d="M19 10.5V12.5C19 14.3565 18.2625 16.137 16.9497 17.4497C15.637 18.7625 13.8565 19.5 12 19.5M12 19.5C10.1435 19.5 8.36301 18.7625 7.05025 17.4497C5.7375 16.137 5 14.3565 5 12.5V10.5M12 19.5V23.5M8 23.5H16M12 1.5C11.2044 1.5 10.4413 1.81607 9.87868 2.37868C9.31607 2.94129 9 3.70435 9 4.5V12.5C9 13.2956 9.31607 14.0587 9.87868 14.6213C10.4413 15.1839 11.2044 15.5 12 15.5C12.7956 15.5 13.5587 15.1839 14.1213 14.6213C14.6839 14.0587 15 13.2956 15 12.5V4.5C15 3.70435 14.6839 2.94129 14.1213 2.37868C13.5587 1.81607 12.7956 1.5 12 1.5Z"
                stroke="white"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_5_205">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button
          type="submit"
          className="simplificiraj-btn"
          onClick={handleSimplificiraj}
        >
          Simplificiraj
        </button>
      </div>
    </div>
  );
};

export default UlazniTekst;
