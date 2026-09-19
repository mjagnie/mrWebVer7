import { createPortal } from "react-dom";

import { musicTiles } from "../data/musicData.js";

export default function AlbumsView() {
    return (
        <div className="musicAlbumsView">
          
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
        </div>
    );
}
