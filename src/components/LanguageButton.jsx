
// file che gestisce i bottoni dei vari lingiaggi

export default function LanguageButton({ title, isActive, onClick }) {
    console.log("🎯 Rendering LanguageButton:", title, "isActive:", isActive);
  
    return (
      <button
        className={`lang-button ${isActive ? "active" : ""}`}
        onClick={onClick}
      >
        {title}
      </button>
    );
  }