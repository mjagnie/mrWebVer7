export default function FilmPanel({
  lang,
  films,
  selectedFilmId,
  setSelectedFilmId,
  selectedFilm,
}) {

  function getLabels(film) {
    return film?.labels?.[lang] || film?.labels?.cs || {};
  }

  // DETAIL MODE
  if (selectedFilmId !== null && selectedFilm) {
    const labels = getLabels(selectedFilm);

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

        <h2 className="panelTitle">
          {labels.title}
        </h2>


        {labels.movieUrl && (
          <a
            className="filmWatchLink"
            href={labels.movieUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="filmWatchImg"
              src={selectedFilm.img}
              alt="labels.title"
            />

            <span className="filmWatchArrow">▶</span>
          </a>
        )}




        {Array.isArray(labels.description) ? (
          labels.description.map((paragraph, index) => (
            <p className="panelText" key={index}>
              {paragraph}
            </p>
          ))
        ) : (
          <p className="panelText">
            {labels.description}
          </p>
        )}
      </div>
    );
  }

  // TILE MODE
  return (
    <div className="filmGridWrap">
      <div className="filmGrid">
        {films.map((film) => {
          const labels = getLabels(film);

          return (
            <button
              key={film.id}
              className="filmTile"
              type="button"

              onClick={() => setSelectedFilmId(film.id)}
            >
              <img
                className="filmTileImg"
                src={film.img}
                alt={film.title}
              />

              <div className="filmTileOverlay">
                <div className="filmTileTitle">
                  {labels.title}
                </div>

                <div className="filmTileMeta">
                  {film.year}
                </div>
              </div>

            </button>
          );
        })}
      </div>
    </div>
  );
}

