import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function usePanelNavigation({
  activePanel,
  setActivePanel,
  lang,
  setSelectedWritingId,
  setSelectedFilmId,
}) {
  const nav = useNavigate();
  const loc = useLocation();

  function closePanel() {
    nav(`/${lang}`);
    setActivePanel(null);
    setSelectedWritingId(null);
    setSelectedFilmId(null);
  }

  function togglePanel(panelName, path, onOpen) {
    if (activePanel === panelName) {
      closePanel();
      return;
    }

    nav(path);
    setActivePanel(panelName);

    if (onOpen) {
      onOpen();
    }
  }

  function openAbout() {
    togglePanel("about", `/${lang}/about`, () => {
      setSelectedWritingId(null);
    });
  }

  function openWritings() {
    togglePanel("writings", `/${lang}/writings`, () => {
      setSelectedWritingId(null);
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

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape" && activePanel !== null) {
        closePanel();
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activePanel, lang]);

  useEffect(() => {
    const path = loc.pathname;

    if (path === `/${lang}/about`) {
      setActivePanel("about");
    } else if (
      path === `/${lang}/writings` &&
      activePanel !== "bookView"
    ) {
      setActivePanel("writings");
    } else if (path === `/${lang}/articles`) {
      setActivePanel("articles");
    } else if (path === `/${lang}/film`) {
      setActivePanel("film");
    } else if (path === `/${lang}/music`) {
      setActivePanel("music");
    } else if (path === `/${lang}/contact`) {
      setActivePanel("contact");
    } else if (path === `/${lang}`) {
      setActivePanel(null);
    }
  }, [loc.pathname, lang, activePanel]);

  useEffect(() => {
    if (loc.pathname === "/") {
      nav("/en", { replace: true });
    }
  }, [loc.pathname, nav]);

  return {
    closePanel,
    openAbout,
    openWritings,
    openArticles,
    openFilm,
    openMusic,
    openContact,
  };
}