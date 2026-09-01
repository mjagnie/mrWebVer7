import { createPortal } from "react-dom";

export default function VideoclipsView({ onBack }) {
  return createPortal(
    <div className="videoclipsFullscreen">
      <button
        className="viewerBackBtn"
        type="button"
        onClick={onBack}
        aria-label="Back"
      >
        ◄
      </button>

      <div className="videoclipsContent">
        <p className="videoclipsText">
          Tyto a podobné výkřiky na vás vychrlí pražská parta Bouchací
          šrouby, enfant terrible toho nejšpinavějšího, co lze v Česku
          slyšet. Zneklidňující hudbu se základem v experimentální
          alternativě či underground utváří prapodivné nástroje jako
          basbalalajka, kosa, basběžka či rádio. Šrouby křesají
          o hrany stereotypů, zažitých frází, odposlechnutých kusů
          rozhovorů a bezmyšlenkovitě reprodukovaných klišé. Sdělení
          mrazivá jako ostří kosy, trefná jako pár facek a povědomější
          než dobře míněné babiččino mentorování z prošlého milenia.
          Ojedinělý posluchačský zážitek zaručen. Znepřátelí si i vás?
          Das ganze tschechische Volk ist eine Simulantenbande!
        </p>
      </div>

      <button
        className="videoclipsClose"
        type="button"
        onClick={onBack}
        aria-label="Close"
      >
        ✕
      </button>
    </div>,
    document.body
  );
}