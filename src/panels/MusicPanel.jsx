import { useState } from "react";

import AlbumsView from "./AlbumsView";
import GalleryView from "./GalleryView";
import VideoclipsView from "./VideoclipsView";

import bouchaciSroubyLogoImg from "../assets/music/bouchaci-srouby-name1.png";

import bandzoneImg from "../assets/music/logo/bandzone-logo.png";
import fbImg from "../assets/music/logo/fb-logo.png";
import spotifyImg from "../assets/music/logo/spotify-logo.png";
import vimeoImg from "../assets/music/logo/vimeo-logo.png";

import articlePageImg from "../assets/music/bs-a2.jpg";

import bouchaciSroubyTextyPdf from "../assets/music/bouchaci-srouby-texty.pdf";


export default function MusicPanel() {
  const [musicView, setMusicView] = useState("main");

  function returnToMain() {
    setMusicView("main");
  }

  // --------------------------------------------------
  // SUBVIEWS
  // --------------------------------------------------

  if (musicView === "videoclips") {
    return <VideoclipsView onBack={returnToMain} />;
  }

  if (musicView === "albums") {
    return <AlbumsView onBack={returnToMain} />;
  }

  if (musicView === "texts") {
    return <TextsView onBack={returnToMain} />;
  }

  if (musicView === "gallery") {
    return <GalleryView onBack={returnToMain} />;
  }


  // --------------------------------------------------
  // MAIN MUSIC PANEL
  // --------------------------------------------------

  return (
    <div className="musicPanel">

      {/* BAND NAME — across both columns */}
      <div className="musicBandLogo">
        <img
          src={bouchaciSroubyLogoImg}
          alt="Bouchací Šrouby"
        />
      </div>


      <div className="musicTwoColumns">

        {/* =================================================
            LEFT COLUMN
            ================================================= */}

        <div className="musicInfoColumn">

          <div className="musicIntro">
            Enfant terrible toho nejšpinavějšího,
            co lze v Česku slyšet. Zneklidňující hudbu
            se základem v experimentální alternativě či
            underground utváří prapodivné nástroje jako
            basbalalajka, kosa, basběžka či rádio. Šrouby
            křesají o hrany stereotypů, zažitých frází,
            odposlechnutých kusů rozhovorů a bezmyšlenkovitě
            reprodukovaných klišé. Sdělení mrazivá jako
            ostří kosy, trefná jako pár facek a
            povědomější než dobře míněné babiččino
            mentorování z prošlého milenia.
            Ojedinělý posluchačský zážitek zaručen.
            Znepřátelí si i vás? Das ganze tschechische
            Volk ist eine Simulantenbande!
          </div>


          {/* SOCIAL MEDIA */}
          <div className="musicSocials">

            <a
              href="https://www.facebook.com/BouchaciSrouby/?locale=cs_CZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={fbImg}
                alt="Facebook" />
            </a>

            <a
              href="https://open.spotify.com/artist/2Bh05zP7mw0I6y2PqffePi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={spotifyImg} alt="Spotify" />
            </a>

            <a
              href="https://bandzone.cz/bouchacisrouby"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={bandzoneImg}
                className="musicSocialBandzone"
                alt="Bandzone"
              />
            </a>

            <a
              href="YOUR_VIMEO_LINK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={vimeoImg}
                className="musicSocialVimeo"
                alt="Vimeo"
              />
            </a>

          </div>
        </div>


        {/* =================================================
            RIGHT COLUMN
            ================================================= */}

        <div className="musicLinksColumn">

          <button
            className="musicTextLink"
            type="button"
            onClick={() => setMusicView("albums")}
          >
            ALBA
          </button>

          <a
            className="musicTextLink"
            href={bouchaciSroubyTextyPdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            TEXTY
          </a>

          <button
            className="musicTextLink"
            type="button"
            onClick={() => setMusicView("videoclips")}
          >
            VIDEOKLIPY
          </button>

          <a
            className="musicTextLink"
            href={articlePageImg}
            target="_blank"
            rel="noopener noreferrer"
          >
            NAPSALI O NÁS
          </a>

          <button
            className="musicTextLink"
            type="button"
            onClick={() => setMusicView("gallery")}
          >
            FOTOGALERIE
          </button>

        </div>

      </div>
    </div>
  );
}