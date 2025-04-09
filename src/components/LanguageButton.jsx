
// file che gestisce i bottoni dei vari lingiaggi

const LanguageButton = ({ title, isActive, onClick }) => {
    console.log(" Rendering LanguageButton:", title, "isActive:", isActive);
  
    return (
      <button
        className={`lang-button ${isActive ? "active" : ""}`}
        onClick={onClick}
      >
        {title}
      </button>
    );
  }

  export default  LanguageButton;