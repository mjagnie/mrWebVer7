import { useEffect, useRef, useState } from "react";

const UI = {
  cs: {
    reviews: "RECENZE",
    back: "Zpět na knihy",
    previous: "Předchozí kniha",
    next: "Další kniha",
  },
  en: {
    reviews: "REVIEWS",
    back: "Back to books",
    previous: "Previous book",
    next: "Next book",
  },
  ru: {
    reviews: "РЕЦЕНЗИИ",
    back: "Назад к книгам",
    previous: "Предыдущая книга",
    next: "Следующая книга",
  },
};

export default function WritingsPanel({
  lang,
  writings,
  selectedWritingId,
  setSelectedWritingId,
  selectedWriting,
  setPageIndex,
}) {
  const ui = UI[lang] || UI.en;

  const [activeCoverIndex, setActiveCoverIndex] = useState(0);
  const coverRefs = useRef([]);

  function getLabels(book) {
    return book?.labels?.[lang] || book?.labels?.cs || {};
  }

  function openBook(bookId) {
    setSelectedWritingId(bookId);

    if (setPageIndex) {
      setPageIndex(0);
    }
  }

  function closeBook() {
    setSelectedWritingId(null);

    if (setPageIndex) {
      setPageIndex(0);
    }
  }

  function showPreviousCover() {
    setActiveCoverIndex((currentIndex) =>
      currentIndex === 0
        ? writings.length - 1
        : currentIndex - 1
    );
  }

  function showNextCover() {
    setActiveCoverIndex((currentIndex) =>
      currentIndex === writings.length - 1
        ? 0
        : currentIndex + 1
    );
  }

  function handleCoverClick(book, index) {
    if (index === activeCoverIndex) {
      openBook(book.id);
      return;
    }

    setActiveCoverIndex(index);
  }

  // Keep active cover centered
  useEffect(() => {
    const activeCover = coverRefs.current[activeCoverIndex];

    if (!activeCover) {
      return;
    }

    activeCover.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeCoverIndex, selectedWritingId]);

  /*
   * Keep active index valid if the writings data changes
   */
  useEffect(() => {
    if (writings.length === 0) {
      setActiveCoverIndex(0);
      return;
    }

    if (activeCoverIndex >= writings.length) {
      setActiveCoverIndex(writings.length - 1);
    }
  }, [writings.length, activeCoverIndex]);

  // --------------------------------------------------
  // COVER CAROUSEL
  // --------------------------------------------------

  if (selectedWritingId === null || !selectedWriting) {
    if (writings.length === 0) {
      return <div className="writingsRoot" />;
    }

    return (
      <div className="writingsRoot">
        <div className="bookCarousel">

          <button
            className="bookCarouselArrow bookCarouselArrow--left"
            type="button"
            onClick={showPreviousCover}
            aria-label={ui.previous}
            title={ui.previous}
          >
            ◄
          </button>

          <div className="bookCarouselTrack">
            {writings.map((book, index) => {
              const labels = getLabels(book);
              const title = labels.titleMain || "Book";
              const cover = book.cover || book.cover2;
              const isActive = index === activeCoverIndex;

              if (!cover) {
                return null;
              }

              const coverClassName =
                book.id === "cesty-na-sibir-2008"
                  ? "bookCarouselCover bookCarouselCover--wide"
                  : "bookCarouselCover";

              return (
                <button
                  key={book.id}
                  ref={(element) => {
                    coverRefs.current[index] = element;
                  }}
                  className={
                    isActive
                      ? "bookCarouselItem bookCarouselItem--active"
                      : "bookCarouselItem"
                  }
                  type="button"
                  onClick={() => handleCoverClick(book, index)}
                  aria-label={
                    isActive
                      ? `${title} — open book information`
                      : `${title} — move to centre`
                  }
                >
                  <img
                    className={coverClassName}
                    src={cover}
                    alt={title}
                  />
                </button>
              );
            })}
          </div>

          <button
            className="bookCarouselArrow bookCarouselArrow--right"
            type="button"
            onClick={showNextCover}
            aria-label={ui.next}
            title={ui.next}
          >
            ►
          </button>

        </div>
      </div>
    );
  }

  // --------------------------------------------------
  // BOOK DETAIL
  // --------------------------------------------------

  const labels = getLabels(selectedWriting);

  return (
    <div className="writingsRoot"
    style={{ outline: "4px solid red" }}>
      
      <button
        className="viewerBackBtn"
        type="button"
        onClick={closeBook}
        aria-label={ui.back}
        title={ui.back}
      >
        ◄
      </button>

      <div className="writingsContent">
        <div className="bookDetail"
        /*style={{ outline: "4px solid green" }}*/>
          <div className="bookDetailText"
          /*style={{ outline: "4px solid orange" }}*/>
            
            {labels.authorMain && (
              <div className="bookAuthor">
                {labels.authorMain}
              </div>
            )}

            {labels.titleMain && (
              <div className="bookTitle">
                <strong>{labels.titleMain}</strong>
              </div>
            )}

            {labels.additionalInfo && (
              <div className="bookInfo">
                {labels.additionalInfo}
              </div>
            )}

            {labels.description && (
              <div className="bookDescription">
                {labels.description}
              </div>
            )}

            {labels.translation && (
              <div className="bookDetails">
                {labels.translation}
              </div>
            )}

            {labels.edition && (
              <div className="bookDetails">
                {labels.edition}
              </div>
            )}

            {labels.publisher && (
              <div className="bookDetails">
                {labels.publisher}
              </div>
            )}

            {labels.year && (
              <div className="bookDetails">
                {labels.year}
              </div>
            )}

            {selectedWriting.reviews?.length > 0 && (
              <div className="bookReviewsInline">
                <strong>{ui.reviews}:</strong>

                {selectedWriting.reviews.map((review) => (
                  <a
                    key={review.href}
                    className="reviewLogoLink"
                    href={review.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="reviewLogo"
                      src={review.logo}
                      alt={review.alt}
                    />
                  </a>
                ))}
              </div>
            )}
          
          </div>
        </div>
      </div>

    </div>
  );
}


