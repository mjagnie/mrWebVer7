import rysavyPlayingOnRadioImg from "../assets/contact/rysavy-playing-on-radio.png";

export default function ContactPanel() {
  return (
    <div className="contactPanel">
      <img
        className="contactPanelImg"
        src={rysavyPlayingOnRadioImg}
        alt="Martin Ryšavý"
      />

      <a
        className="contactEmail"
        href="mailto:martin-rysavy@volny.cz"
      >
        martin-rysavy@volny.cz
      </a>
    </div>
  );
}
