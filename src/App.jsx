import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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

import "./App.css";


const writings = createWritingsData(writingImages);
const films = createFilmsData(filmImages);


export default function App() {
  // ---------------- STATE ----------------
  const [activePanel, setActivePanel] = useState(null);
  const [selectedWritingId, setSelectedWritingId] = useState(null);
  const [writingsSection, setWritingsSection] = useState(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [selectedFilmId, setSelectedFilmId] = useState(null);

  // ---------------- ROUTER / LANGUAGE ----------------
  const nav = useNavigate();
  const loc = useLocation();
  const lang = getLangFromPath(loc.pathname);

  const ui = menuImages[lang] || menuImages.en;


  // ---------------- Derived ----------------
  const panelOpen = activePanel !== null;

  const selectedFilm = films.find((f) => f.id === selectedFilmId) || null;
  const selectedWriting = writings.find((w) => w.id === selectedWritingId) || null;


  // ---------------- ACTIONS ----------------
  function closePanel() {
    nav(`/${lang}`);
    setActivePanel(null);
    setSelectedWritingId(null);
    setWritingsSection(null);
    setPageIndex(0);
    setSelectedFilmId(null);
  }
  function togglePanel(panelName, path, onOpen) {
    if (activePanel === panelName) {
      closePanel();
      return;
    }
    nav(path);
    setActivePanel(panelName);
    if (onOpen) onOpen();
  }
  function openAbout() {
    togglePanel("about", `/${lang}/about`, () => {
      setSelectedWritingId(null);
      setWritingsSection(null);
    });
  }
  function openWritings() {
    togglePanel("writings", `/${lang}/writings`, () => {
      setSelectedWritingId(null);
      setWritingsSection(null);
      setPageIndex(0);
    });
  }
  function openArticles() {
    togglePanel("articles", `/${lang}/articles`);
  }
  function openFilm() {
    togglePanel("film", `/${lang}/film`, () => {
      setSelectedFilmId(null);
    });
  }
  function openMusic() {
    togglePanel("music", `/${lang}/music`);
  }
  function openContact() {
    togglePanel("contact", `/${lang}/contact`);
  }


  // ---------------- EFFECTS ----------------

  // ESC closes panel
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape" && activePanel !== null) {
        closePanel();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activePanel, lang]); // include lang


  // Keep activePanel in sync with the URL
  useEffect(() => {
    const path = loc.pathname;

    if (path === `/${lang}/about`) setActivePanel("about");
    else if (
      path === `/${lang}/writings` &&
      activePanel !== "bookView"
    ) {
      setActivePanel("writings");
    }
    else if (path === `/${lang}/articles`) setActivePanel("articles");
    else if (path === `/${lang}/film`) setActivePanel("film");
    else if (path === `/${lang}/music`) setActivePanel("music");
    else if (path === `/${lang}/contact`) setActivePanel("contact");
    else if (path === `/${lang}`) setActivePanel(null);
  }, [loc.pathname, lang, activePanel]);

  // Redirect "/" → "/en"
  useEffect(() => {
    if (loc.pathname === "/") {
      nav("/en", { replace: true });
    }
  }, [loc.pathname, nav]);


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
          writingsSection={writingsSection}
          setWritingsSection={setWritingsSection}
          selectedWritingId={selectedWritingId}
          setSelectedWritingId={setSelectedWritingId}
          selectedWriting={selectedWriting}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
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




