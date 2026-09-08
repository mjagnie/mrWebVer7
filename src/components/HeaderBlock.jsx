
export default function HeaderBlock({
  menuRysavyImg,
  menuWritingsImg,
  menuArticlesImg,
  menuMusicImg,
  menuFilmImg,
  menuContactImg,
  onOpenAbout,
  onOpenWritings,
  onOpenArticles,
  onOpenFilm,
  onOpenMusic,
  onOpenContact,
}) {

  return (
    <div className="headerBlock">

      {/* Name / About */}
      <button
        className="menuBtn menuBtn--name"
        onClick={onOpenAbout}
        type="button"
        aria-label="About"
      >
        <img
          src={menuRysavyImg}
          alt="About"
          className="menuImg menuImg--name"
        />
      </button>


      {/* Menu */}
      <div className="menuRow">

        {/* writings */}
        <button
          className="menuBtn menuBtn--writings"
          onClick={onOpenWritings}
          type="button"
          aria-label="Writings"
        >
          <img
            src={menuWritingsImg}
            alt="Writings"
            className="menuImg menuImg--writings"
          />
        </button>

        {/* articles */}
        <button
          className="menuBtn menuBtn--articles"
          onClick={onOpenArticles}
          type="button"
          aria-label="Articles"
        >
          <img
            src={menuArticlesImg}
            alt="Articles"
            className="menuImg menuImg--articles"
          />
        </button>

        {/* film */}
        <button
          className="menuBtn menuBtn--film"
          onClick={onOpenFilm}
          type="button"
          aria-label="Film"
        >
          <img
            src={menuFilmImg}
            alt="Film"
            className="menuImg menuImg--film"
          />
        </button>

        {/* music */}
        <button
          className="menuBtn menuBtn--music"
          onClick={onOpenMusic}
          type="button"
          aria-label="Music"
        >
          <img
            src={menuMusicImg}
            alt="Music"
            className="menuImg menuImg--music"
          />
        </button>

        {/* contact */}
        <button
          className="menuBtn menuBtn--contact"
          onClick={onOpenContact}
          type="button"
          aria-label="Contact"
        >
          <img
            src={menuContactImg}
            alt="Contact"
            className="menuImg menuImg--contact"
          />
        </button>

      </div>

      
    </div>
  );
}

