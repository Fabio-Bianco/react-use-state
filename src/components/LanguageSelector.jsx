import { useState } from "react";
import languages from "../data/languages";
import LanguageButton from "./LanguageButton";
import LanguageCard from "./LanguageCard";


export default function LanguageSelector() {
  // Stato che tiene traccia del linguaggio selezionato
  // Parte da "null" → quindi nessun linguaggio è selezionato all'inizio
  const [selectedLang, setSelectedLang] = useState(null);

  // Ogni volta che il componente viene renderizzato, stampiamo lo stato attuale
  console.log(" Render del componente LanguageSelector.");
  console.log(" Linguaggio attualmente selezionato:", selectedLang);

  return (
    <div className="language-selector">
      <h1 className="main-title">Learn Web development</h1>
      {/* Sezione sottotitolo */}
      <h2 className="subtitle">Select a language to start learning:</h2>
      {/* 🔘 Sezione bottoni */}
      <div className="button-container">
        {languages.map((lang) => (
          <LanguageButton
            key={lang.id}
            title={lang.title}
            isActive={selectedLang?.title === lang.title}
            onClick={() => {
              console.log("👆 Hai cliccato:", lang.title);
              setSelectedLang(lang);
            }}
          />
        ))}
      </div>

      {/* Sezione card */}
      <LanguageCard language={selectedLang} />

    </div>
  );
}
