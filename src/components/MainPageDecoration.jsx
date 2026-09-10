import {
  starImg,
  footprintImg,
  footprintLeftImg,
  bearImg,
} from "../data/appAssets";

export default function MainDecorations({ lang }) {
  if (lang === "en") {
    return (
      <>
        <img
          src={footprintImg}
          alt=""
          className="footprintDecoration-1"
        />

        <img
          src={footprintLeftImg}
          alt=""
          className="footprintDecoration-2"
        />

        <img
          src={footprintLeftImg}
          alt=""
          className="footprintDecoration-3"
        />

        <img
          src={footprintLeftImg}
          alt=""
          className="footprintDecoration-4"
        />

        <img
          src={footprintLeftImg}
          alt=""
          className="footprintDecoration-5"
        />

        <img
          src={footprintImg}
          alt=""
          className="footprintDecoration-7"
        />
      </>
    );
  }

  if (lang === "ru") {
    return (
      <>
        <img src={bearImg} alt="" className="bearDecoration-1" />
        <img src={bearImg} alt="" className="bearDecoration-2" />
      </>
    );
  }

  if (lang === "cs") {
    return (
      <>
        <img src={starImg} alt="" className="star-1" />
        <img src={starImg} alt="" className="star-2" />
      </>
    );
  }

  return null;
}