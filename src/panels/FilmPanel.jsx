export default function FilmPanel({
  films,
  selectedFilmId,
  setSelectedFilmId,
  selectedFilm,
}) {
  
  // DETAIL MODE
  if (selectedFilmId !== null && selectedFilm) {
    return (
      <div className="filmDetail">
        {/* Back button same as Books viewer */}
        <button
          className="viewerBackBtn"
          type="button"
          onClick={() => setSelectedFilmId(null)}
          aria-label="Back to film tiles"
        >
          ◄
        </button>

        <h2 className="panelTitle">{selectedFilm.title}</h2>
        <p className="panelText">{selectedFilm.description}</p>
      </div>
    );
  }

  // TILE MODE
  return (
    <div className="filmGridWrap">
      <div className="filmGrid">
        {films.map((film) => (
          <button
            key={film.id}
            className="filmTile"
            type="button"
            onClick={() => setSelectedFilmId(film.id)}
          >
            <img className="filmTileImg" src={film.img} alt={film.title} />

            <div className="filmTileOverlay">
              <div className="filmTileTitle">{film.title}</div>
              <div className="filmTileMeta">{film.year}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

