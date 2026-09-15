export default function FilmPanel({
  lang,
  films,
  setSelectedFilmId,
  onOpenFilm,
}) {
  function getLabels(film) {
    return film?.labels?.[lang] || film?.labels?.cs || {};
  }

  function openFilm(filmId) {
    setSelectedFilmId(filmId);
    onOpenFilm(filmId);
  }

  return (
    <section className="films-panel">
      <div className="films-list">
        {[...films]
          .sort((a, b) => b.id - a.id)
          .map((film) => {
            const labels = getLabels(film);

            return (
              <div
                key={film.id}
                className="film-item"
              >
                <div className="film-year">
                  {film.year}
                </div>

                <button
                  className="film-link"
                  type="button"
                  onClick={() => openFilm(film.id)}
                >
                  {labels.title}
                </button>
              </div>
            );
          })}
      </div>
    </section>
  );
}