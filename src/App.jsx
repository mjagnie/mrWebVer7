import { useState } from "react";
import { useLocation } from "react-router-dom";

import { createWritingsData } from "./data/writingsData";
import { createFilmsData } from "./data/filmsData";

import {
  bgImg,
  rysavyAboutImg,
  contactImg,
  menuImages,
  writingImages,
  filmImages,
} from "./data/appAssets";

import { getLangFromPath } from "./utils/lang";

import MainPage from "./components/MainPage";
import RightPanel from "./components/RightPanel";
import PanelContent from "./components/PanelContent";
import usePanelNavigation from "./hooks/usePanelNavigation";
import "./App.css";

const writings = createWritingsData(writingImages);
const films = createFilmsData(filmImages);

export default function App() {
  // ---------------- STATE ----------------
  const [activePanel, setActivePanel] = useState(null);
  const [selectedWritingId, setSelectedWritingId] = useState(null);
  const [selectedFilmId, setSelectedFilmId] = useState(null);

  // ---------------- ROUTER / LANGUAGE ----------------
  const loc = useLocation();
  const lang = getLangFromPath(loc.pathname);

  const ui = menuImages[lang] || menuImages.en;


  // ---------------- Derived ----------------
  const panelOpen = activePanel !== null;

  const selectedFilm =
    films.find((f) => f.id === selectedFilmId) || null;

  const selectedWriting =
    writings.find((w) => w.id === selectedWritingId) || null;

  const {
    closePanel,
    openAbout,
    openWritings,
    openArticles,
    openFilm,
    openMusic,
    openContact,
  } = usePanelNavigation({
    activePanel,
    setActivePanel,
    lang,
    setSelectedWritingId,
    setSelectedFilmId,
  });

  // ---------------- RENDER ----------------
  return (
    <div
      className={`page lang-${lang}`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {!panelOpen && (
        <MainPage
          lang={lang}
          ui={ui}
          onOpenAbout={openAbout}
          onOpenWritings={openWritings}
          onOpenArticles={openArticles}
          onOpenFilm={openFilm}
          onOpenMusic={openMusic}
          onOpenContact={openContact}
        />
      )}
      <RightPanel
        open={panelOpen}
        onClose={closePanel}
        panelType={activePanel}
      >
        <PanelContent
          activePanel={activePanel}
          lang={lang}
          writings={writings}
          setSelectedWritingId={setSelectedWritingId}
          selectedWriting={selectedWriting}
          setActivePanel={setActivePanel}
          films={films}
          selectedFilmId={selectedFilmId}
          setSelectedFilmId={setSelectedFilmId}
          selectedFilm={selectedFilm}
          rysavyAboutImg={rysavyAboutImg}
          contactImg={contactImg}
        />
      </RightPanel>
    </div>
  );
}




