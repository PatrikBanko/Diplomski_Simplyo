import "../styles/RazinaSimplifikacije.css";

function RazinaSimplifikacije() {
  return (
    <div className="razina-simplifikacije">
      <select id="options" className="dropdown-select">
        <option value="" disabled selected>
          Razina simplifikacije
          <svg
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
          </svg>
        </option>
        <option value="option1">Niska</option>
        <option value="option2">Balansirana</option>
        <option value="option3">Visoka</option>
      </select>
    </div>
  );
}

export default RazinaSimplifikacije;
