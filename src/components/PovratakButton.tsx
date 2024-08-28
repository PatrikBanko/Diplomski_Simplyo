import { Outlet, Link } from "react-router-dom";
import "../styles/PovratakButton.css";

function PovratakButton() {
  return (
    <div className="povratak-button">
      <Link to={"/"}>
        <button className="btn povratak-btn">
          <div className="btn-povratak-ikona">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 6L9 12L15 18"
                stroke="white"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="btn-povratak-tekst">Povratak</div>
        </button>
      </Link>
    </div>
  );
}

export default PovratakButton;
