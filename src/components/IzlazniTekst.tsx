import "../styles/IzlazniTekst.css";
import React, { useRef } from "react";

interface IzlazniTekstProps {
  outputTekst: string;
  setOutputTekst: (value: string) => void;
}

const IzlazniTekst: React.FC<IzlazniTekstProps> = ({
  outputTekst,
  setOutputTekst,
}) => {
  const simplificiranoRef = useRef<HTMLTextAreaElement>(null);

  const resetTextarea = () => {
    setOutputTekst("");
  };

  const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

  const textToSpeech = async (outputTekst: string) => {
    try {
      const openaiResponse = await fetch(
        "https://api.openai.com/v1/audio/speech",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify({
            model: "tts-1-hd",
            voice: "alloy",
            input: outputTekst,
          }),
        }
      );

      if (!openaiResponse.ok) {
        console.error(
          "API request failed:",
          openaiResponse.status,
          openaiResponse.statusText
        );
        return;
      }

      // Determine if the response is JSON or binary
      const contentType = openaiResponse.headers.get("Content-Type");

      if (contentType && contentType.includes("application/json")) {
        const data = await openaiResponse.json();
        console.log("JSON response:", data);
      } else if (contentType && contentType.includes("audio/")) {
        const audioBlob = await openaiResponse.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        audio.play();
      } else {
        console.error("Unexpected content type:", contentType);
      }
    } catch (error) {
      console.error("Error during text-to-speech process:", error);
    }
  };

  function handleTextToSpeech() {
    try {
      textToSpeech(outputTekst);
    } catch (error) {
      alert(error);
      console.error(error);
    }
  }

  function handleKopiraj() {
    if (simplificiranoRef.current) {
      simplificiranoRef.current.removeAttribute("readOnly");
      simplificiranoRef.current.select();
      navigator.clipboard
        .writeText(simplificiranoRef.current.value)
        .then(() => {
          alert("Rezultat kopiran u međuspremnik!");
        })
        .catch((err) => {
          console.error("Neuspjelo kopiranje u međuspremnik: ", err);
        });
      simplificiranoRef.current.setAttribute("readOnly", "{true}");
    }
  }

  // Zamjena fonta na klik gumba
  const textareaZamjenaFonta = document.querySelector(".izlaz-textarea") as HTMLTextAreaElement;
  let font = "Inter";

  function handleZamjeniFont() {
    if (font === "Inter") {
      textareaZamjenaFonta.style.fontFamily = 'open-dyslexic';
      textareaZamjenaFonta.style.fontSize = '20px';
      font = "open-dyslexic";
    }
    else {
      textareaZamjenaFonta.style.fontFamily = 'Inter';
      textareaZamjenaFonta.style.fontSize = '16px';
      font = "Inter";
    }
  };

  return (
    <div className="izlazni-tekst">
      <div className="izlaz-header">
        <textarea
          ref={simplificiranoRef}
          placeholder="Simplificirani tekst"
          rows={3}
          className="izlaz-textarea"
          readOnly={true}
          value={outputTekst}
          onChange={(e) => setOutputTekst(e.target.value)}
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
      <div className="izlaz-footer">
        <div className="izlaz-footer-lijeva-grupa">
          <button className="govor-btn" onClick={handleTextToSpeech}>
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
          <button className="promijeni-font" onClick={handleZamjeniFont}>
            <p className=".promijeni-font p">ABC</p>
          </button>
        </div>

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

export default IzlazniTekst;
