import "../styles/writings.css";

export default function WritingsPanel({
  writings,
  setSelectedWritingId,
  onOpenBook,
}) {
  function openBook(bookId) {
    setSelectedWritingId(bookId);
    onOpenBook();
  }

  return (
    <section className="writings-panel">
      <h1></h1>

      <div className="writings-list">
        {writings.map((book) => {
          const labels = book.labels?.cs || {};

          return (
            <div key={book.id} className="writing-item">
              <div className="writing-year">
                {labels.year?.match(/\d{4}/)?.[0]}
              </div>

              <button
                className="writing-link"
                type="button"
                onClick={() => openBook(book.id)}
              >
                {labels.titleMain}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}