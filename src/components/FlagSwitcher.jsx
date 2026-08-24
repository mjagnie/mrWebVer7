import { useLocation, useNavigate } from "react-router-dom";
import "../styles/flag-switcher.css";

import flagEn from "../assets/ui/main-page/language-switch/flag-en.png";
import flagCs from "../assets/ui/main-page/language-switch/flag-cs.png";
import flagRu from "../assets/ui/main-page/language-switch/flag-ru.png";

export default function FlagSwitcher({ lang }) {
  const nav = useNavigate();
  const loc = useLocation();

  function switchLang(newLang) {
    // replace "/en" or "/cs" or "/ru" in the URL, keep the rest
    const newPath = loc.pathname.replace(/^\/(en|cs|ru)/, `/${newLang}`);
    nav(newPath);
  }

  return (
    <div className="flagWrap">
      <button
        className={`flagBtn ${lang === "en" ? "active" : ""}`}
        onClick={() => switchLang("en")}
        type="button"
        aria-label="English"
        title="English"
      >
        <img className="flagImg" src={flagEn} alt="English flag" />
      </button>

      <button
        className={`flagBtn ${lang === "cs" ? "active" : ""}`}
        onClick={() => switchLang("cs")}
        type="button"
        aria-label="Czech"
        title="Czech"
      >
        <img className="flagImg" src={flagCs} alt="Czech flag" />
      </button>

      <button
        className={`flagBtn ${lang === "ru" ? "active" : ""}`}
        onClick={() => switchLang("ru")}
        type="button"
        aria-label="Russian"
        title="Russian"
      >
        <img className="flagImg" src={flagRu} alt="Russian flag" />
      </button>
    </div>
  );
}
