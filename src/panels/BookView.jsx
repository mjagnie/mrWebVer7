export default function BookView({
  lang,
  selectedWriting,
  onBack,
}) {

  const UI = {
    cs: {
      reviews: "RECENZE",
    },
    en: {
      reviews: "REVIEWS",
    },
    ru: {
      reviews: "РЕЦЕНЗИИ",
    },
  };

  const ui = UI[lang] || UI.en;

  function getLabels(book) {
    return book?.labels?.[lang] || book?.labels?.cs || {};
  }

  const labels =
    selectedWriting?.labels?.[lang] ||
    selectedWriting?.labels?.cs ||
    {};

  const cover =
    selectedWriting.cover ||
    selectedWriting.cover2;

  return (
    <div className="bookView">


      <button
        className="viewerBackBtn"
        type="button"
        onClick={onBack}
        aria-label={ui.back}
        title={ui.back}
      >
        ◄
      </button>

      <div className="writingsContent">
        
        <div className="bookDetail">

          <div className="bookDetailCover">
            <img src={cover} alt={labels.titleMain || "Book cover"} />
          </div>
          
          <div className="bookDetailText">

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