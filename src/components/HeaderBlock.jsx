
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
        className="nameLink" 
        onClick={onOpenAbout} 
        type="button"
        aria-label="About"
      >
        <img
          src={menuRysavyImg} 
          alt="About" 
          className="nameImg"
        />
      </button>


      {/* Main menu */}
      <div className="menuRow">
        <button
          className="menuBtn"
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

        <button
          className="menuBtn"
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

        <button 
          className="menuBtn" 
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
      </div>

      {/* Contact */}
      <div className="contactRow">
        <button 
          className="contactBtn"
          onClick={onOpenContact} 
          type="button"
          aria-label="Contact"
        >
          <img 
            src={menuContactImg} 
            alt="Contact" 
            className="contactImg contactImg--contact"
          />
        </button>
      </div>

    </div>
  );
}

