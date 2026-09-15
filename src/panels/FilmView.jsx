export default function FilmView({
  lang,
  selectedFilm,
}) {
  const labels =
    selectedFilm?.labels?.[lang] ||
    selectedFilm?.labels?.cs ||
    {};

  if (!selectedFilm) {
    return null;
  }

  return (
    <div className="filmDetail">

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
            alt={labels.title}
          />

          <span className="filmWatchArrow">
            ▶
          </span>
        </a>
      )}

      {Array.isArray(labels.description) ? (
        labels.description.map((paragraph, index) => (
          <p
            className="panelText"
            key={index}
          >
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