import "../styles/PovijestRecord.css";

interface PovijestRecordProps {
  outputTekst: string;
}

const PovijestRecord: React.FC<PovijestRecordProps> = ({ outputTekst }) => {
  const handleKopiraj = () => {
    navigator.clipboard
      .writeText(outputTekst)
      .then(() => alert("Tekst kopiran u međuspremnik!"))
      .catch((err) =>
        console.error("Neuspjelo kopiranje u međuspremnik: ", err)
      );
  };
  return (
    <div className="povijest-record">
      <div className="povijest-record-header">
        <textarea
          placeholder="Simplificirani tekst"
          rows={3}
          readOnly={true}
          value={outputTekst}
        ></textarea>
      </div>
      <div className="povijest-record-footer">
        <button className="govor-btn">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.57 5.42999C21.4447 7.30527 22.4979 9.84835 22.4979 12.5C22.4979 15.1516 21.4447 17.6947 19.57 19.57M16.04 8.95999C16.9774 9.89763 17.5039 11.1692 17.5039 12.495C17.5039 13.8208 16.9774 15.0924 16.04 16.03M11.5 5.49999L6.5 9.49999H2.5V15.5H6.5L11.5 19.5V5.49999Z"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button className="kopiraj-btn" onClick={handleKopiraj}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_13_1900)">
              <path
                d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5M11 9H20C21.1046 9 22 9.89543 22 11V20C22 21.1046 21.1046 22 20 22H11C9.89543 22 9 21.1046 9 20V11C9 9.89543 9.89543 9 11 9Z"
                stroke="white"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_13_1900">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PovijestRecord;
