import bouchaciSroubyImg from "../assets/music/albums/bouchaci-srouby-2012.jpg";
import sroubyDetemImg from "../assets/music/albums/srouby-detem-2013.jpg";
import nocnyMurImg from "../assets/music/albums/nocny-mur-2015.jpg";
import kdyzJsemVrtalCihlyImg from "../assets/music/albums/kdyz-jsem-vrtal-cihly-2019.jpg";
import gatyarandasImg from "../assets/music/albums/gatyarandas.png";

import textyImg from "../assets/music/bouchaci-srouby-texty-cerveny.png";
import bouchaciSroubyTextyPdf from "../assets/music/bouchaci-srouby-texty.pdf";

export const musicTiles = [
  {
    id: "bouchaci-srouby-2012",
    type: "album",
    title: "Bouchací šrouby",
    image: bouchaciSroubyImg,
    url: "YOUR_ALBUM_LINK_1",
  },
  {
    id: "srouby-detem-2013",
    type: "album",
    title: "Šrouby dětem",
    image: sroubyDetemImg,
    url: "YOUR_ALBUM_LINK_2",
  },
  {
    id: "nocny-mur-2015",
    type: "album",
    title: "Nočný múr",
    image: nocnyMurImg,
    url: "YOUR_ALBUM_LINK_3",
  },
  {
    id: "kdyz-jsem-vrtal-cihly-2019",
    type: "album",
    title: "Když jsem vrtal cihly",
    image: kdyzJsemVrtalCihlyImg,
    url: "YOUR_ALBUM_LINK_4",
  },
  {
    id: "gatyarandas-20xx",
    type: "album",
    title: "Gatyarandas",
    image: gatyarandasImg,
    url: "YOUR_ALBUM_LINK_5",
  },
  {
    id: "texty",
    type: "pdf",
    title: "Texty",
    image: textyImg,
    url: bouchaciSroubyTextyPdf,
  },
];