import { useRef, useState } from "react";
import { createPortal } from "react-dom";

import { musicTiles } from "../data/musicData.js";

import arrowRightImg from "../assets/ui/right-panel/arrow-right.png";
import Video1 from "../assets/music/video1.mp4";

import bouchaciSroubyLogoImg from "../assets/music/bouchaci-srouby-name1.png";
import bouchaciSroubyTextyPdf from "../assets/music/bouchaci-srouby-texty.pdf";
import albaImg from "../assets/music/alba.png";
import albaATextyImg from "../assets/music/alba-a-texty.png";
import galleryImg from "../assets/music/gallery.png";
import sroubyMirrorImg from "../assets/music/srouby-mirror.png"

import bandzoneImg from "../assets/music/logo/bz-logo-cerne-pozadi.png";
import fbImg from "../assets/music/logo/fb-logo.png";
import textyImg from "../assets/music/bouchaci-srouby-texty-cerveny.png";
import spotifyImg from "../assets/music/logo/spotify-logo.png";
import vimeoImg from "../assets/music/logo/vimeo-logo.png";

import articleButtonImg from "../assets/music/A2.png";
import articlePageImg from "../assets/music/bs-a2.jpg";

import bs2Img from "../assets/music/concert_pictures/bs2.png";
import bs31Img from "../assets/music/concert_pictures/bs31.png";
import bs5Img from "../assets/music/concert_pictures/bs5.png";
import bs1Img from "../assets/music/concert_pictures/bs1.png";
import fakirImg from "../assets/music/concert_pictures/fakir.jpg";
import bs6Img from "../assets/music/concert_pictures/bs6.png";
import bs16Img from "../assets/music/concert_pictures/bs16.png";
import bs28Img from "../assets/music/concert_pictures/bs28.png";
import bs10Img from "../assets/music/concert_pictures/bs10.png";
import bs23Img from "../assets/music/concert_pictures/bs23.png";
import bs14Img from "../assets/music/concert_pictures/bs14.png";
import bs27Img from "../assets/music/concert_pictures/bs27.png";
import bs26Img from "../assets/music/concert_pictures/bs26.png";
import bs29Img from "../assets/music/concert_pictures/bs29.png";
import bs12Img from "../assets/music/concert_pictures/bs12.png";
import bs22Img from "../assets/music/concert_pictures/bs22.png";
import bs11Img from "../assets/music/concert_pictures/bs11.png";
import bs33Img from "../assets/music/concert_pictures/bs33.png";
import bs15Img from "../assets/music/concert_pictures/bs15.png";
import kolazImg from "../assets/music/kolaz.png";

import bouchaciSroubyImg from "../assets/music/albums/bouchaci-srouby-2012.jpg";
import sroubyDetemImg from "../assets/music/albums/srouby-detem-2013.jpg";
import nocnyMurImg from "../assets/music/albums/nocny-mur-2015.jpg";
import kdyzJsemVrtalCihlyImg from "../assets/music/albums/kdyz-jsem-vrtal-cihly-2019.jpg";

export default function MusicPanel() {

  const galleryImages = [
    bs1Img,
    bs2Img,
    bs5Img,
    bs6Img,
    bs10Img,
    bs11Img,
    bs12Img,
    bs14Img,
    bs15Img,
    bs16Img,
    bs22Img,
    bs23Img,
    bs26Img,
    bs27Img,
    bs28Img,
    bs29Img,
    bs31Img,
    bs33Img,
    fakirImg,
  ];

  const videoRef = useRef(null);
  const [videoPlaying, setVideoPlaying] = useState(true);
  const [musicView, setMusicView] = useState("main");

  const [galleryIndex, setGalleryIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  function prevImage() {
    setGalleryIndex((i) =>
      i === 0 ? galleryImages.length - 1 : i - 1
    );
  }

  function nextImage() {
    setGalleryIndex((i) =>
      i === galleryImages.length - 1 ? 0 : i + 1
    );
  }

  if (musicView === "albums") {
    return (
      <div className="musicAlbumsView">
        <button
          className="viewerBackBtn"
          type="button"
          onClick={() => setMusicView("main")}
          aria-label="Back"
        >
          ◄
        </button>

        <div className="musicAlbumsGrid">
          {musicTiles.map((tile) => (
            <a
              key={tile.id}
              className="musicAlbumTile"
              href={tile.url}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={tile.image}
                alt={tile.title}
              />
            </a>
          ))}
        </div>
      </div>
    );
  }

  if (musicView === "gallery") {
    return createPortal(
      <div className="galleryFullscreen">



        <button
          className="galleryArrowSimple galleryArrowLeft"
          type="button"
          onClick={prevImage}
          aria-label="Previous image"
        >
          ◄
        </button>

        <img
          className="galleryFullscreenImg"
          src={galleryImages[galleryIndex]}
          alt=""
        />

        <button
          className="galleryArrowSimple galleryArrowRight"
          onClick={nextImage}
        >
          ►
        </button>

        <button
          className="galleryClose"
          onClick={() => setMusicView("main")}
        >
          ✕
        </button>

      </div>,
      document.body
    );
  }



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
                  rel="noreferrer"
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
                  rel="noreferrer"
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
                  rel="noreferrer"
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
                  rel="noreferrer"
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
              rel="noreferrer"
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
                alt="Albums"
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

            {/* Screws mirror image */}
            <div className="sroubyMirrorImg">
              <img
                src={sroubyMirrorImg}
                alt="Srouby mirror image"
              />
            </div>

            {/* Facebook + Spotify */}
            <div className="musicSocialRow">
              <a
                href="https://www.facebook.com/BouchaciSrouby/?locale=cs_CZ"
                target="_blank"
                rel="noreferrer"
              >
                <img src={fbImg} alt="Facebook" />
              </a>

              <a
                href="https://open.spotify.com/artist/2Bh05zP7mw0I6y2PqffePi"
                target="_blank"
                rel="noreferrer"
              >
                <img src={spotifyImg} alt="Spotify" />
              </a>

              <a
                href="YOUR_VIMEO_LINK"
                target="_blank"
                rel="noreferrer"
                className="vimeoWrap"
              >
                <img
                  className="vimeoSmall"
                  src={vimeoImg}
                  alt="Vimeo"
                />
              </a>
            </div>

            {/* Bandzone */}
            <a
              className="musicMenuItem musicMenuItemDark"
              href="https://bandzone.cz/bouchacisrouby"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={bandzoneImg}
                alt="Bandzone"
              />
            </a>


          </div>
        </div>

      </div>

  );
}
