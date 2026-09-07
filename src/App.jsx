import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { createWritingsData } from "./data/writingsData";
import { createFilmsData } from "./data/filmsData";

import { getLangFromPath } from "./utils/lang";

import FlagSwitcher from "./components/FlagSwitcher";
import HeaderBlock from "./components/HeaderBlock";
import RightPanel from "./components/RightPanel";

import AboutPanel from "./panels/AboutPanel";
import WritingsPanel from "./panels/WritingsPanel";
import BookView from "./panels/BookView";
import ArticlesPanel from "./panels/ArticlesPanel";
import MusicPanel from "./panels/MusicPanel";
import FilmPanel from "./panels/FilmPanel";
import ContactPanel from "./panels/ContactPanel";

import bgImg from "./assets/ui/main-page/background.jpg";
import starImg from "./assets/ui/main-page/star.png";
import footprintImg from "./assets/ui/main-page/footprint1.png";
import footprintLeftImg from "./assets/ui/main-page/footprint-left.png";
import bearImg from "./assets/ui/main-page/bear.png";

// Menu images (EN)
import menuRysavyImgEn from "./assets/ui/main-page/menu/en/menu-rysavy.png";
import menuWritingsImgEn from "./assets/ui/main-page/menu/en/menu-writings.png";
import menuArticlesImgEn from "./assets/ui/main-page/menu/en/menu-articles.png";
import menuMusicImgEn from "./assets/ui/main-page/menu/en/menu-music.png";
import menuFilmImgEn from "./assets/ui/main-page/menu/en/menu-film.png";
import menuContactImgEn from "./assets/ui/main-page/menu/en/menu-contact.png";

// Menu images (RU)
import menuRysavyImgRu from "./assets/ui/main-page/menu/ru/menu-rysavy.png";
import menuWritingsImgRu from "./assets/ui/main-page/menu/ru/menu-writings.png";
import menuArticlesImgRu from "./assets/ui/main-page/menu/ru/menu-articles.png";
import menuFilmImgRu from "./assets/ui/main-page/menu/ru/menu-film.png";
import menuMusicImgRu from "./assets/ui/main-page/menu/ru/menu-music.png";
import menuContactImgRu from "./assets/ui/main-page/menu/ru/menu-contact.png";

// Menu images (CS)
import menuRysavyImgCs from "./assets/ui/main-page/menu/cs/menu-rysavy.png";
import menuWritingsImgCs from "./assets/ui/main-page/menu/cs/menu-writings.png";
import menuArticlesImgCs from "./assets/ui/main-page/menu/cs/menu-articles.png";
import menuFilmImgCs from "./assets/ui/main-page/menu/cs/menu-film.png";
import menuMusicImgCs from "./assets/ui/main-page/menu/cs/menu-music.png";
import menuContactImgCs from "./assets/ui/main-page/menu/cs/menu-contact.png";

// About image
import rysavyAboutImg from "./assets/about/slepy-gulliver.jpg";

// Film images
import argisImg from "./assets/films/argis.png";
import rozpravaImg from "./assets/films/rozprava-o-metode.jpg";
import indiankaImg from "./assets/films/bila-indianka.png";
import malupienImg from "./assets/films/malupien-olsovy-spas.png";
import kdoImg from "./assets/films/kdo-mne-nauci.png";
import medvediImg from "./assets/films/medvedi-ostrovy.png";
import naVodeImg from "./assets/films/na-vode1.png";
import gulliverImg from "./assets/films/slepy-gulliver.jpg";
import jaHerecImg from "./assets/films/ja-herec.jpg";
import bananoveDetiImg from "./assets/films/bananove-deti.png";
import duseVmuzeuImg from "./assets/films/duse-v-muzeu.jpg";
import afonkaImg from "./assets/films/afonka-uz-nechce.jpg";
import zemeSnuImg from "./assets/films/zeme-snu.png";
import panPovolnyImg from "./assets/films/pan-povolny.png";

// Writing images
import lesniChodciEd1Cover from "./assets/books/lesni-chodci-ed1/lesni-chodci-ed1.jpg";
import vytvarnePraceCover from "./assets/books/vytvarne-prace/vytvarne-prace.webp"
import lesniChodciEd2Cover1Img from "./assets/books/lesni-chodci/lesni-chodci-cover1.jpg";

import cestyCover1ImgCs from "./assets/books/cesty-na-sibir/cs/cesty-na-sibir-cover1.jpg";
import cestyCover2ImgCs from "./assets/books/cesty-na-sibir/cs/cesty-na-sibir-cover2.png";
import cestyEd2Cover1ImgCs from "./assets/books/cesty-na-sibir/cs/cesty-na-sibir-ed2-cover1.jpg";

import cestyCover1ImgEs from "./assets/books/cesty-na-sibir/es/cesty-na-sibir-cover1.jpg";

import vracCover1ImgCs from "./assets/books/vrac/cs/vrac-cover1.jpg";
import vracCover1ImgPl from "./assets/books/vrac/pl/vrac-cover1.jpg";
import vracCover1ImgBg from "./assets/books/vrac/bg/vrac-cover1.jpg";
import vracCover1ImgDe from "./assets/books/vrac/de/vrac-cover1.jpg";

import tundraCover1Img from "./assets/books/tundra-a-smrt/tundra-a-smrt-cover1.jpg";

import lovecTichaCoverImg from "./assets/books/lovec-ticha/lovec-ticha.jpg";

import staniceCover1Img from "./assets/books/stanice-4s-ostrov/stanice-4s-ostrov-cover1.jpg";

import zlateVideniCover1Img from "./assets/books/zlate-videni/zlate-videni-cover1.jpg";

//Contact image
import contactImg from "./assets/contact/rysavy-playing-on-radio.png";

//Book reviews logos
import iLiteraturaImg from "./assets/books/logo-rewiev/logo-iliteratura.svg";
import iDnesLogo from "./assets/books/logo-rewiev/idnes-logo.png";
import ceskyRozhlasLogo from "./assets/books/logo-rewiev/Cesky_rozhlas_logo.png";
import hospodarskeNovinyLogo from "./assets/books/logo-rewiev/Hospodarske_noviny_logo.gif";
import patroniteLogo from "./assets/books/logo-rewiev/patronite-logo.png";

import "./App.css";



// -----------------------------------------------------------------------------



export default function App() {
  // ---------------- STATE ----------------
  const [activePanel, setActivePanel] = useState(null);
  const [selectedWritingId, setSelectedWritingId] = useState(null);
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  const [writingsSection, setWritingsSection] = useState(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [selectedFilmId, setSelectedFilmId] = useState(null);


  // ---------------- ROUTER / LANGUAGE ----------------
  const nav = useNavigate();
  const loc = useLocation();
  const lang = getLangFromPath(loc.pathname);



  // ---------------- Data (content) ----------------

  const writingImages = {
    lesniChodciEd1Cover,

    vytvarnePraceCover,

    lesniChodciEd2Cover1Img,

    cestyCover1ImgCs,
    cestyCover2ImgCs,
    cestyEd2Cover1ImgCs,
    cestyCover1ImgEs,

    vracCover1ImgCs,
    vracCover1ImgPl,
    vracCover1ImgBg,
    vracCover1ImgDe,

    tundraCover1Img,
    lovecTichaCoverImg,
    staniceCover1Img,
    zlateVideniCover1Img,

    iLiteraturaImg,
    iDnesLogo,
    ceskyRozhlasLogo,
    hospodarskeNovinyLogo,
    patroniteLogo,
  };

  const filmImages = {
    argisImg,
    rozpravaImg,
    indiankaImg,
    malupienImg,
    kdoImg,
    medvediImg,
    naVodeImg,
    gulliverImg,
    jaHerecImg,
    bananoveDetiImg,
    duseVmuzeuImg,
    afonkaImg,
    zemeSnuImg,
    panPovolnyImg,
  };


  // These are plain arrays
  const writings = createWritingsData(writingImages);
  const films = createFilmsData(filmImages);

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


  // ---------------- UI ASSETS BY LANGUAGE ----------------
  const ui =
    lang === "ru"
      ? {
        menuRysavyImg: menuRysavyImgRu,
        menuWritingsImg: menuWritingsImgRu,
        menuArticlesImg: menuArticlesImgRu,
        menuMusicImg: menuMusicImgRu,
        menuFilmImg: menuFilmImgRu,
        menuContactImg: menuContactImgRu,
      }
      : lang === "cs"
        ? {
          menuRysavyImg: menuRysavyImgCs,
          menuWritingsImg: menuWritingsImgCs,
          menuArticlesImg: menuArticlesImgCs,
          menuMusicImg: menuMusicImgCs,
          menuFilmImg: menuFilmImgCs,
          menuContactImg: menuContactImgCs,
        }
        : {
          menuRysavyImg: menuRysavyImgEn,
          menuWritingsImg: menuWritingsImgEn,
          menuArticlesImg: menuArticlesImgEn,
          menuMusicImg: menuMusicImgEn,
          menuFilmImg: menuFilmImgEn,
          menuContactImg: menuContactImgEn,
        };



  // ---------------- RENDER ----------------
  return (
    <div
      className={`page lang-${lang}`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >

      {!panelOpen && (
        <>
          <div className="langBar">
            <FlagSwitcher lang={lang} />
          </div>

          <HeaderBlock
            menuRysavyImg={ui.menuRysavyImg}
            menuWritingsImg={ui.menuWritingsImg}
            menuArticlesImg={ui.menuArticlesImg}
            menuMusicImg={ui.menuMusicImg}
            menuFilmImg={ui.menuFilmImg}
            menuContactImg={ui.menuContactImg}
            onOpenAbout={openAbout}
            onOpenWritings={openWritings}
            onOpenArticles={openArticles}
            onOpenFilm={openFilm}
            onOpenMusic={openMusic}
            onOpenContact={openContact}
            lang={lang}
          />

          {lang === "en" && (
            <>
              <img
                src={footprintImg}
                alt=""
                className="footprintDecoration-1"
              />

              <img
                src={footprintLeftImg}
                alt=""
                className="footprintDecoration-2"
              />

              <img
                src={footprintLeftImg}
                alt=""
                className="footprintDecoration-3"
              />

              <img
                src={footprintLeftImg}
                alt=""
                className="footprintDecoration-4"
              />
              <img
                src={footprintLeftImg}
                alt=""
                className="footprintDecoration-5"
              />

              <img
                src={footprintImg}
                alt=""
                className="footprintDecoration-7"
              />
            </>
          )}

          {lang === "ru" && (
            <>
              <img
                src={bearImg}
                alt=""
                className="bearDecoration-1"
              />

              <img
                src={bearImg}
                alt=""
                className="bearDecoration-2"
              />
            </>
          )}

          {lang === "cs" && (
            <>
              <img
                src={starImg}
                alt=""
                className="star-1"
              />

              <img
                src={starImg}
                alt=""
                className="star-2"
              />
            </>
          )}
        </>
      )}
      <RightPanel
        open={panelOpen}
        onClose={closePanel}
        panelType={activePanel}
      >

        {activePanel === "about" && (
          <AboutPanel rysavyAboutImg={rysavyAboutImg} lang={lang} />
        )}

        {activePanel === "writings" && (
          <WritingsPanel
            lang={lang}
            writings={writings}
            writingsSection={writingsSection}
            setWritingsSection={setWritingsSection}
            selectedWritingId={selectedWritingId}
            setSelectedWritingId={setSelectedWritingId}
            selectedWriting={selectedWriting}
            pageIndex={pageIndex}
            setPageIndex={setPageIndex}
            onOpenBook={() => setActivePanel("bookView")}
          />
        )}

        {activePanel === "bookView" && (
          <BookView
            lang={lang}
            selectedWriting={selectedWriting}
            onBack={() => setActivePanel("writings")}
          />
        )}

        {activePanel === "articles" && (
          <ArticlesPanel />
        )}

        {activePanel === "film" && (
          <FilmPanel
            lang={lang}
            films={films}
            selectedFilmId={selectedFilmId}
            setSelectedFilmId={setSelectedFilmId}
            selectedFilm={selectedFilm}
          />
        )}

        {activePanel === "music" && <MusicPanel />}

        {activePanel === "contact" && (
          <ContactPanel contactImg={contactImg} lang={lang} />
        )}

      </RightPanel>
    </div>
  );
}




