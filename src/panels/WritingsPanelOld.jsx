import booksImg from "../assets/books/knihy-back.png";

export default function WritingsPanel({
  writings,
  setSelectedWritingId,
  onOpenBook,
}) {
  function openBook(bookId) {
    setSelectedWritingId(bookId);
    onOpenBook();
  }

  if (writings.length === 0) {
    return <div className="writingsRoot" />;
  }

 return (
    <div className="writingsRoot">

      <div className="writingsPicture">
        <img
          className="writingsPictureImg"
          src={booksImg}
          alt="Books by Martin Ryšavý"
        />

        <button
          className="bookHotspot bookHotspot--vrac"
          type="button"
          onClick={() => openBook("vrac-cz")}
          aria-label="Vrač"
        />

        <button
          className="bookHotspot bookHotspot--tundra"
          type="button"
          onClick={() => openBook("book-9")}
          aria-label="Tundra a smrt"
        />

        <button
          className="bookHotspot bookHotspot--lesni"
          type="button"
          onClick={() => openBook("lesni-chodci-2001")}
          aria-label="Lesní chodci"
        />

        <button
          className="bookHotspot bookHotspot--cesty"
          type="button"
          onClick={() => openBook("cesty-na-sibir-2011")}
          aria-label="Cesty na Sibiř"
        />

        <button
          className="bookHotspot bookHotspot--zlate"
          type="button"
          onClick={() => openBook("book-8")}
          aria-label="Zlaté vidění"
        />

      </div>

    </div>
  );
}