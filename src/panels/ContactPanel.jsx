import rysavyPlayingOnRadioImg from "../assets/contact/rysavy-playing-on-radio.png";
import emailImg from "../assets/contact/email.png";

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
        <img
          src={emailImg}
          alt="martin-rysavy@volny.cz"
          className="contactEmailImg"
        />
      </a>
    </div>
  );
}
