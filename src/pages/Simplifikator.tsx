import { useState } from "react";
import { useSimplifiedTextContext } from "../components/SimplificiraniTekstContext";
import PovratakButton from "../components/PovratakButton";
import Navigacija from "../components/Navigacija";
import RazinaSimplifikacije from "../components/RazinaSimplifikacije";
import UlazniTekst from "../components/UlazniTekst";
import IzlazniTekst from "../components/IzlazniTekst";
import axios from "axios";
import "../styles/Simplifikator.css";

const Simplifikator = () => {
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
            "Stavi se u ulogu logopeda i lingvista za hrvatski jezik. Blago pojednostavi ovaj tekst, zadržavajući većinu originalnih detalja. Rečenice neka budu blago složene, ali koristi dodatna objašnjenja i primjere za ključne pojmove. Nemoj prepričavati originalni tekst već zadrži njemu što sličniju formu.";
          break;
        case "srednja":
          systemMessage =
            "Stavi se u ulogu logopeda i lingvista za hrvatski jezik. Umjereno pojednostavi ovaj tekst tako da bude razumljiv. Koristi kratke ili duge rečenice, ali jednostavne za razumijevanje. Objasni ključne pojmove koji se javljaju u tekstu koristeći kratka objašnjenja. Prema potrebi dodaj i kontekst za bolje razumijevanje. Nemoj prepričavati originalni tekst već zadrži njemu što sličniju formu. ";
          break;
        case "visoka":
          systemMessage =
            "Stavi se u ulogu logopeda i lingvista za hrvatski jezik. Pojednostavi ovaj tekst tako da bude lako razumljiv. Koristi sažete i jednostavne rečenice i osnovni vokabular bez složene terminologije. Pojednostavni kao da je za osnovnoškolce. Nemoj prepričavati originalni tekst već zadrži njemu što sličniju formu.";
          break;
        default:
          systemMessage =
            "Stavi se u ulogu logopeda i lingvista za hrvatski jezik. Umjereno pojednostavi ovaj tekst tako da bude razumljiv. Koristi kratke ili duge rečenice, ali jednostavne za razumijevanje. Objasni ključne pojmove koji se javljaju u tekstu koristeći kratka objašnjenja. Prema potrebi dodaj i kontekst za bolje razumijevanje. Nemoj prepričavati originalni tekst već zadrži njemu što sličniju formu. ";
      }

      const data = {
        model: "gpt-4o",
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
};

export default Simplifikator;
