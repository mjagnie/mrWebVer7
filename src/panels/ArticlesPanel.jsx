import articles from "../data/articlesData";
import "../styles/articles.css";

export default function ArticlesPanel() {
  return (
    <section className="articles-panel">
      <h1></h1>

      <div className="articles-list">
        {articles.map((article) => (
          <p key={article.id} className="article-item">
            <div className="article-year">
              {article.year}
            </div>
            <a
              className="article-link"
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {article.title}
            </a>
          </p>
        ))}
      </div>
    </section>
  );
}