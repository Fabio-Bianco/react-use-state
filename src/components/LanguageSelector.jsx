import languages from "../data/languages";

export default function LanguageSelector() {
  return (
    <div>
      <h1>Linguaggi Web</h1>

      <ul>
        {languages.map((lang) => (
          <li key={lang.id}>{lang.title}</li>
        ))}
      </ul>
    </div>
  );
}
