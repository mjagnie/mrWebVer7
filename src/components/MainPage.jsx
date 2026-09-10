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
  return (
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
        onOpenAbout={onOpenAbout}
        onOpenWritings={onOpenWritings}
        onOpenArticles={onOpenArticles}
        onOpenFilm={onOpenFilm}
        onOpenMusic={onOpenMusic}
        onOpenContact={onOpenContact}
        lang={lang}
      />
    </>
  );
}