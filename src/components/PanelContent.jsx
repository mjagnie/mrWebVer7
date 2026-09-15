import AboutPanel from "../panels/AboutPanel";
import WritingsPanel from "../panels/WritingsPanel";
import BookView from "../panels/BookView";
import ArticlesPanel from "../panels/ArticlesPanel";
import MusicPanel from "../panels/MusicPanel";
import FilmPanel from "../panels/FilmPanel";
import ContactPanel from "../panels/ContactPanel";

export default function PanelContent({
    activePanel,
    lang,
    writings,
    setSelectedWritingId,
    selectedWriting,
    setActivePanel,
    films,
    selectedFilmId,
    setSelectedFilmId,
    selectedFilm,
    rysavyAboutImg,
    contactImg,
}) {
    return (
        <>
            {activePanel === "about" && (
                <AboutPanel
                    rysavyAboutImg={rysavyAboutImg}
                    lang={lang}
                />
            )}

            {activePanel === "writings" && (
                <WritingsPanel
                    writings={writings}
                    setSelectedWritingId={setSelectedWritingId}
                    onOpenBook={() => setActivePanel("bookView")}
                />
            )}

            {activePanel === "bookView" && (
                <BookView
                    lang={lang}
                    selectedWriting={selectedWriting}
                    onBack={() => setActivePanel("writings")}
                />
            )}

            {activePanel === "articles" && (
                <ArticlesPanel />
            )}

            {activePanel === "film" && (
                <FilmPanel
                    lang={lang}
                    films={films}
                    selectedFilmId={selectedFilmId}
                    setSelectedFilmId={setSelectedFilmId}
                    selectedFilm={selectedFilm}
                />
            )}

            {activePanel === "music" && (
                <MusicPanel />
            )}

            {activePanel === "contact" && (
                <ContactPanel
                    contactImg={contactImg}
                    lang={lang} />
            )}
        </>
    );
}