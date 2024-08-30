import { useState } from "react";

import PovratakButton from "../components/PovratakButton";
import Navigacija from "../components/Navigacija";
import RazinaSimplifikacije from "../components/RazinaSimplifikacije";
import UlazniTekst from "../components/UlazniTekst";
import IzlazniTekst from "../components/IzlazniTekst";
import { useSimplifiedTextContext } from "./SimplificiraniTekstContex";

import axios from "axios";

import "../styles/Simplifikator.css";

export default function Simplifikator() {
  //State za unos i ispis teksta
  const [inputTekst, setInputTekst] = useState("");
  const [outputTekst, setOutputTekst] = useState("");
  const [razinaSimplifikacije, setRazinaSimplifikacije] = useState("");

  const { addSimplifiedText } = useSimplifiedTextContext();

  const handleRazinaSimplifikacijeChange = (
    level: React.SetStateAction<string>
  ) => {
    setRazinaSimplifikacije(level);
  };

  const handleSimplificiraj = async () => {
    try {
      const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

      const apiUrl = "https://api.openai.com/v1/chat/completions";

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      };

      let systemMessage = "";

      switch (razinaSimplifikacije) {
        case "Niska":
          systemMessage =
            "Blago pojednostavi tekst, zadržavajući većinu originalnih detalja.";
          break;
        case "Balansirana":
          systemMessage =
            "Umjereno pojednostavni ovaj tekst na hrvatski jezik tako da bude razumljiv, sa sažetim rečenicama i jednostavnim riječima.";
          break;
        case "visoka":
          systemMessage =
            "Prevedi ovaj tekst na hrvatski jezik tako da bude lako razumljiv, sa sažetim rečenicama i jednostavnim riječima. Pojednostavni kao da je za osnovnoškolce.";
          break;
        default:
          systemMessage =
            "Umjereno pojednostavni ovaj tekst na hrvatski jezik tako da bude razumljiv, sa sažetim rečenicama i jednostavnim riječima.";
      }

      const data = {
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: systemMessage,
          },
          { role: "user", content: inputTekst },
        ],
        max_tokens: 512,
        temperature: 0.7,
      };

      const response = await axios.post(apiUrl, data, { headers });

      setOutputTekst(response.data.choices[0].message.content.trim());

      addSimplifiedText(response.data.choices[0].message.content.trim());
    } catch (error) {
      alert("Error processing your request: " + error);
    }
  };

  return (
    <div className="simplifikator">
      <div className="simplifikator-povratak-btn">
        <PovratakButton />
      </div>

      <div className="simplifikator-level-I-O">
        <div className="simplifikator-level">
          <RazinaSimplifikacije onChange={handleRazinaSimplifikacijeChange} />
        </div>
        <div className="simplifikator-I">
          <UlazniTekst
            inputTekst={inputTekst}
            setInputTekst={setInputTekst}
            onSimplificiraj={handleSimplificiraj}
          />
        </div>
        <div className="simplifikator-O">
          <IzlazniTekst
            outputTekst={outputTekst}
            setOutputTekst={setOutputTekst}
          />
        </div>
      </div>

      <div className="simplifikator-navigacija">
        <Navigacija />
      </div>
    </div>
  );
}
