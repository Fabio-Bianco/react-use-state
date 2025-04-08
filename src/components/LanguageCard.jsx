
// contiene la crad con la descrizione del linguaggio selezionato
export default function LanguageCard({ language }) {
    console.log("🧾 Rendering LanguageCard:", language);
  
    if (!language) {
      return (
        <div className="language-card">
          <p className="no-selection">
            <em>Nessun linguaggio selezionato</em>
          </p>
        </div>
      );
    }
  
    return (
      <div className="language-card">
        <h2 className="lang-title">{language.title}</h2>
        <p className="lang-description">{language.description}</p>
      </div>
    );
  }
  