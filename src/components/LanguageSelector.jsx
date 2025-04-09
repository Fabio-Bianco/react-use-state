import { useState } from "react";
import languages from "../data/languages";
import LanguageButton from "./LanguageButton";
import LanguageCard from "./LanguageCard";
import './LanguageSelector.css';


const LanguageSelector = () => {
  // Stato: linguaggio selezionato (null = niente selezionato)
  const [selectedLang, setSelectedLang] = useState(null);

  // Ogni render stampiamo lo stato attuale
  console.log(" Render. selectedLang:", selectedLang);

  return (
    <div className="language-selector">
      <h1 className="main-title">Learn Web development</h1>

      {/* Lista di bottoni */}
      <div className="button-container">
        {languages.map((lang) => (
          <LanguageButton
            key={lang.id}
            title={lang.title}
            isActive={selectedLang ?. title === lang.title}
            onClick={() => {
              //  Toggle logica: se è già selezionato, lo deseleziona
              if (selectedLang ?. title === lang.title) {
                console.log("Reset linguaggio:", lang.title);
                setSelectedLang(null);
              } else {
                console.log("Selezionato:", lang.title);
                setSelectedLang(lang);
              }
            }}
          />
        ))}
      </div>

      {/* Card sotto */}
      <LanguageCard language={selectedLang} />
    </div>
  );
}


export default  LanguageSelector;