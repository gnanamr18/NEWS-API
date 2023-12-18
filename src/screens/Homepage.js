import React, { useState, useEffect } from "react";
import "../App.css";
import { FaArrowRight } from "react-icons/fa";

const Homepage = () => {
  const [data, setdata] = useState(null);
  useEffect(() => {
    fetchHeadlines();
  }, []);

  async function fetchHeadlines() {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=92950858d255430788197912e5b80db4"
      );
      const articles = await response.json();
      if (Array.isArray(articles.articles)) {
        const modifiedArticles = [];

        articles.articles.forEach((currentArticle) => {
          // Check if the current article has a title
          if (
            (currentArticle.title,
            currentArticle.urlToImage,
            currentArticle.description)
          ) {
            // If it has a title, add it to the modifiedArticles array
            modifiedArticles.push(currentArticle);
          }
        });
        setdata(modifiedArticles);
        console.log(modifiedArticles);
      }
    } catch (error) {
      if (error) {
        console.log(error.message);
      }
    }
  }

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="container">
      <div>
        <h3>Top News From India</h3>
      </div>

      <div className="box-1">
        {data &&
          data.slice(0, 3).map((article, index) => (
            <div id="article" key={index}>
              <img src={article.urlToImage} />
              <h2>{article.title}</h2>
              <p>{article.description}..</p>
              <div id="article-link">
                <p>Read Full Article</p>
                <button
                  className="arrow"
                  onClick={() => {
                    window.location.assign(article.url);
                  }}
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="box-2">
        {data &&
          data.slice(3, 6).map((article, index) => (
            <div id="article" key={index}>
              <img src={article.urlToImage} />
              <h2>{article.title}</h2>
              <p>{article.description}..</p>
              <div id="article-link">
                <p>Read Full Article</p>
                <button
                  className="arrow"
                  onClick={() => {
                    window.location.assign(article.url);
                  }}
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="box-3">
        {data &&
          data.slice(6, 9).map((article, index) => (
            <div id="article" key={index}>
              <img src={article.urlToImage} />
              <h2>{article.title}</h2>
              <p>{article.description}..</p>
              <div id="article-link">
                <p>Read Full Article</p>
                <button
                  className="arrow"
                  onClick={() => {
                    window.location.assign(article.url);
                  }}
                >
                  <FaArrowRight />
                </button>{" "}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Homepage;
