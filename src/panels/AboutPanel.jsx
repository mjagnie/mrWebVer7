import { ABOUT_CONTENT } from "../data/aboutContent";

export default function AboutPanel({ rysavyAboutImg, lang }) {
  const content = ABOUT_CONTENT[lang] || ABOUT_CONTENT.cs;

  return (
    <div className="panelContent aboutPanel">

      {/* ---------------- INTRO ---------------- */}

      <div className="panelTextWrap">
        {content.intro.beforeImage.map((paragraph, index) => (
          <p
            key={index}
            className="panelText"
          >
            {paragraph.strong && (
              <strong>{paragraph.strong}</strong>
            )}

            {paragraph.text}
          </p>
        ))}
      </div>


      {/* ---------------- IMAGE ---------------- */}

      <div className="panelImgWrap">
        <img
          className="panelImg"
          src={rysavyAboutImg}
          alt="Martin Ryšavý"
        />
      </div>


      {/* ---------------- CONTENT ---------------- */}

      <div className="panelTextWrap">

        {content.intro.afterImage.map((paragraph, index) => (
          <p
            key={index}
            className="panelText"
          >
            {paragraph.text}
          </p>
        ))}


        {/* ---------------- SECTIONS ---------------- */}

        {content.sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>

            <p className="panelText panelText--heading">
              {section.heading}
            </p>

            {section.subsections ? (
              section.subsections.map((subsection, subsectionIndex) => (
                <div key={subsectionIndex}>

                  <p className="panelText panelText--subheading">
                    {subsection.heading}
                  </p>

                  <ul className="panelList">
                    {subsection.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="panelListItem"
                      >
                        <strong>{item.title}</strong>
                        {item.text}
                      </li>
                    ))}
                  </ul>

                </div>
              ))
            ) : (
              <ul className="panelList">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="panelListItem"
                  >
                    <strong>{item.title}</strong>
                    {item.text}
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

