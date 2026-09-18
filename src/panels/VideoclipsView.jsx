

import vracimSeImg from "../assets/videoclips/vracim-se-na-misto-sve-smrti.png";
import mrtvolaImg from "../assets/videoclips/mrtvola.png";
import denPobedyImg from "../assets/videoclips/den-pobedy.png";
import landmannschaftImg from "../assets/videoclips/landsmannschaft-aus-breitenbach.png";
import papinakImg from "../assets/videoclips/papinak-benzinem.png";
import prvniKoncertImg from "../assets/videoclips/prvni-koncert.png";
import renatImg from "../assets/videoclips/renat.png";

const VIDEOS = [
  {
    id: 1,
    title: "Vracím se na místo své smrti",
    image: vracimSeImg,
    url: "https://vimeo.com/manage/videos/1165579520",
  },
  {
    id: 2,
    title: "Mrtvola",
    image: mrtvolaImg,
    url: "https://vimeo.com/manage/videos/1160490409",
  },
  {
    id: 3,
    title: "Děň pobjedy",
    image: denPobedyImg,
    url: "https://vimeo.com/manage/videos/1165487400",
  },
  {
    id: 4,
    title: "Landsmannschaft aus Breitenbach",
    image: landmannschaftImg,
    url: "https://vimeo.com/manage/videos/1166165669",
  },
  {
    id: 5,
    title: "Papiňák benzínem",
    image: papinakImg,
    url: "https://vimeo.com/manage/videos/1165504664",
  },
  {
    id: 6,
    title: "Renat",
    image: renatImg,
    url: "https://www.youtube.com/watch?v=8HHr-rKd-Es&list=RD8HHr-rKd-Es&start_radio=1",
  },
  {
    id: 7,
    title: "První koncert Bouchacích šroubů",
    image: prvniKoncertImg,
    url: "https://vimeo.com/manage/videos/1165444591",
  },
];

export default function VideoclipsView({ }) {
  return (
    <div className="videoclipsFullscreen">
    
      <div className="videoclipsGrid">
        {VIDEOS.map((video) => (
          <a
            key={video.id}
            className="videoclipTile"
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="videoclipTileImg"
              src={video.image}
              alt={video.title}
            />
            <div className="videoclipTileOverlay">
              <div className="videoclipTileTitle">{video.title}</div>
              <div className="videoclipTileArrow">▶</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}