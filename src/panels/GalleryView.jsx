import { useState } from "react";
import { createPortal } from "react-dom";

import bs1Img from "../assets/music/concert_pictures/bs1.png";
import bs2Img from "../assets/music/concert_pictures/bs2.png";
import bs5Img from "../assets/music/concert_pictures/bs5.png";
import bs6Img from "../assets/music/concert_pictures/bs6.png";
import bs10Img from "../assets/music/concert_pictures/bs10.png";
import bs11Img from "../assets/music/concert_pictures/bs11.png";
import bs12Img from "../assets/music/concert_pictures/bs12.png";
import bs14Img from "../assets/music/concert_pictures/bs14.png";
import bs15Img from "../assets/music/concert_pictures/bs15.png";
import bs16Img from "../assets/music/concert_pictures/bs16.png";
import bs22Img from "../assets/music/concert_pictures/bs22.png";
import bs23Img from "../assets/music/concert_pictures/bs23.png";
import bs26Img from "../assets/music/concert_pictures/bs26.png";
import bs27Img from "../assets/music/concert_pictures/bs27.png";
import bs28Img from "../assets/music/concert_pictures/bs28.png";
import bs29Img from "../assets/music/concert_pictures/bs29.png";
import bs31Img from "../assets/music/concert_pictures/bs31.png";
import bs33Img from "../assets/music/concert_pictures/bs33.png";
import fakirImg from "../assets/music/concert_pictures/fakir.jpg";

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

export default function GalleryView({ onBack }) {
   const [galleryIndex, setGalleryIndex] = useState(0);

  function prevImage() {
    setGalleryIndex((index) =>
      index === 0 ? galleryImages.length - 1 : index - 1
    );
  }

  function nextImage() {
    setGalleryIndex((index) =>
      index === galleryImages.length - 1 ? 0 : index + 1
    );
  }
  
  return createPortal (
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
                  type="button"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  ►
                </button>
        
                <button
                  className="galleryClose"
                  type="button"
                  onClick={ onBack }
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>,
              document.body
            );
          }