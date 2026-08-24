import { ABOUT_CONTENT } from "../data/aboutContent";

export default function AboutPanel({ rysavyAboutImg, lang }) {
  const content = ABOUT_CONTENT?.[lang] || ABOUT_CONTENT?.cs;

  if (!content) {
    return (
      <div className="panelContent aboutPanel">
        <div className="panelTextWrap">
          <p className="panelText">About content is missing.</p>
        </div>
      </div>
    );
  }

  const intro = content.intro || { beforeImage: [], afterImage: [] };
  const sections = Array.isArray(content.sections) ? content.sections : [];

  function renderParagraph(block, index) {
    if (!block || block.type !== "p") return null;

    return (
      <p key={index} className="panelText">
        {block.strong && <strong>{block.strong}</strong>}
        {block.text}
      </p>
    );
  }

  return (
    <div className="panelContent aboutPanel">
      {/* INTRO — before image */}
      <div className="panelTextWrap">
        {intro.beforeImage.map(renderParagraph)}
      </div>

      {/* IMAGE */}
      <div className="panelImgWrap">
        <img className="panelImg" src={rysavyAboutImg} alt="Martin Ryšavý" />
      </div>

      {/* INTRO — after image + SECTIONS */}
      <div className="panelTextWrap">
        {intro.afterImage.map(renderParagraph)}

        {/* SECTIONS */}
        {sections.map((section, si) => (
          <div key={si}>
            <p className="panelText panelText--heading">{section.heading}</p>

            {Array.isArray(section.subsections) ? (
              section.subsections.map((sub, sj) => (
                <div key={sj}>
                  <p className="panelText panelText--subheading">{sub.title}</p>

                  <ul className="panelList">
                    {(sub.items || []).map((item, k) => (
                      <li key={k} className="panelListItem">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <ul className="panelList">
                {(section.items || []).map((item, k) => (
                  <li key={k} className="panelListItem">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


