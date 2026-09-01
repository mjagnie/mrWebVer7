import { useRef, useState } from "react";

import AlbumsView from "./AlbumsView";
import GalleryView from "./GalleryView";
import VideoclipsView from "./VideoclipsView";

import Video1 from "../assets/music/video1.mp4";

import bouchaciSroubyLogoImg from "../assets/music/bouchaci-srouby-name1.png";
import albaATextyImg from "../assets/music/alba-a-texty.png";
import galleryImg from "../assets/music/gallery.png";
import sroubyMirrorImg from "../assets/music/srouby-mirror.png";
import videoklipyImg from "../assets/music/videoklipy.png";

import chlastatImg from "../assets/music/chlastat-a-mrdat-transparent.png";

import bandzoneImg from "../assets/music/logo/bz-logo-cerne-pozadi.png";
import fbImg from "../assets/music/logo/fb-logo.png";
import spotifyImg from "../assets/music/logo/spotify-logo.png";
import vimeoImg from "../assets/music/logo/vimeo-logo.png";

import articleButtonImg from "../assets/music/A2.png";
import articlePageImg from "../assets/music/bs-a2.jpg";


export default function MusicPanel() {
  const videoRef = useRef(null);
  const [videoPlaying, setVideoPlaying] = useState(true);
  const [musicView, setMusicView] = useState("main");

  // helper
  function returnToMain() {
    setMusicView("main");
  }

  // --------------------------------------------------
  // VIEWS: VIDEOCLIPS, GALLERY, ALBUMS & TEXTS
  // --------------------------------------------------

  if (musicView === "videoclips") {
    return <VideoclipsView onBack={returnToMain} />;
  }
  
  if (musicView === "albums") {
    return <AlbumsView onBack={returnToMain} />;
  }
  
  if (musicView === "gallery") {
    return <GalleryView onBack={returnToMain} />;
  }


  // --------------------------------------------------
  // MAIN MUSIC PANEL
  // --------------------------------------------------

  return (
    <div className="musicPanel">
      <div className="musicMainLayout">

        {/* LEFT SIDE */}

        <div className="musicMainLeft">
          <div className="musicVideoWrap">

            <div className="musicVideoSocials">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/BouchaciSrouby/?locale=cs_CZ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={fbImg}
                  className="musicVideoSocial musicVideoFb"
                  alt="Facebook"
                />
              </a>

              {/* Spotify */}
              <a
                href="https://open.spotify.com/artist/2Bh05zP7mw0I6y2PqffePi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={spotifyImg}
                  className="musicVideoSocial musicVideoSpotify"
                  alt="Spotify"
                />
              </a>

              {/* Vimeo */}
              <a
                href="YOUR_VIMEO_LINK"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={vimeoImg}
                  className="musicVideoSocial musicVideoVimeo"
                  alt="Vimeo"
                />
              </a>

              {/* Bandzone */}
              <a
                href="https://bandzone.cz/bouchacisrouby"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={bandzoneImg}
                  className="musicVideoSocial musicVideoBandzone"
                  alt="Bandzone"
                />
              </a>
            </div>

            <img
              className="musicVideoTitle"
              src={bouchaciSroubyLogoImg}
              alt="Bouchaci srouby"
            />

            <video
              ref={videoRef}
              className="musicMainVideo"
              autoPlay
              muted
              playsInline
              onPlay={() => setVideoPlaying(true)}
              onEnded={() => {
                if (videoRef.current) {
                  videoRef.current.currentTime = 0;
                }

                setVideoPlaying(false);
              }}
            >
              <source src={Video1} type="video/mp4" />
            </video>

            {!videoPlaying && (
              <button
                className="musicVideoPlayBtn"
                type="button"
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                    videoRef.current.play();
                  }
                }}
                aria-label="Play video"
              >
                ▶
              </button>
            )}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="musicMainRight">

          {/* Newspaper article */}
          <a
            className="musicMenuItem"
            href={articlePageImg}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={articleButtonImg}
              alt="Newspaper article"
            />
          </a>

          {/* Albums and Texts*/}
          <button
            className="musicMenuItem"
            type="button"
            onClick={() => setMusicView("albums")}
          >
            <img
              src={albaATextyImg}
              alt="Albums and texts"
            />
          </button>

          {/* Gallery */}
          <button
            className="musicMenuItem"
            type="button"
            onClick={() => setMusicView("gallery")}
          >
            <img
              src={galleryImg}
              alt="Gallery"
            />
          </button>

          {/* Videoclips */}
          <button
            className="musicMenuItem"
            type="button"
            onClick={() => setMusicView("videoclips")}
          >
            <img
              src={videoklipyImg}
              alt="Videoklipy"
            />
          </button>


          {/* Decorative screws mirror image */}
          <div className="sroubyMirrorImg">
            <img
              src={sroubyMirrorImg}
              alt=""
            />
          </div>

        </div> {/* end musicMainRight */}

      </div> {/* end musicMainLayout */}

      {/* Decoration */}
      <img
        src={chlastatImg}
        alt=""
        className="chlastatDecoration"
      />

    </div>
  );
}
