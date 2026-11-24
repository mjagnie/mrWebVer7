import { useState, useEffect } from "react";
import FlagSwitcher from "./FlagSwitcher";
import HeaderBlock from "./HeaderBlock";



export default function MainPage({
  lang,
  ui,
  onOpenAbout,
  onOpenWritings,
  onOpenArticles,
  onOpenFilm,
  onOpenMusic,
  onOpenContact,
}) {

  const calculateScale = () =>
    Math.min(
      window.innerWidth / 1536,
      window.innerHeight / 742
    );

  const [canvasScale, setCanvasScale] = useState(calculateScale);

  useEffect(() => {
    const handleResize = () => {
      setCanvasScale(calculateScale());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className="mainPageCanvas"
        style={{ "--canvas-scale": canvasScale }}
      >

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
          onOpenAbout={onOpenAbout}
          onOpenWritings={onOpenWritings}
          onOpenArticles={onOpenArticles}
          onOpenFilm={onOpenFilm}
          onOpenMusic={onOpenMusic}
          onOpenContact={onOpenContact}
          lang={lang}
        />
      </div>
      {/*
      <div className="desktopAbout">
        <AboutPanel
          rysavyAboutImg={rysavyAboutImg}
          lang={lang}
        />
      </div>*/}



    </>
  );
}