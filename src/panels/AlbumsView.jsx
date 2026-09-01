import { createPortal } from "react-dom";

import { musicTiles } from "../data/musicData.js";
import sroubaImg from "../assets/music/srouba.png";
import fakirDecorationImg from "../assets/music/fakir3.png";

export default function AlbumsView({ onBack }) {
    return (
        <div className="musicAlbumsView">
            <button
                className="viewerBackBtn"
                type="button"
                onClick={onBack}
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
                        rel="noopener noreferrer"
                    >
                        <img
                            src={tile.image}
                            alt={tile.title}
                        />
                    </a>
                ))}
            </div>

            {/*<img
                src={fakirDecorationImg}
                alt=""
                className="albumsFakirDecoration"
            />*/}

            <img
                src={sroubaImg}
                alt=""
                className="sroubaDecoration"
            />
            <img
                src={sroubaImg}
                alt=""
                className="sroubaDecoration1"
            />
            <img
                src={sroubaImg}
                alt=""
                className="sroubaDecoration2"
            />
        </div>
    );
}
