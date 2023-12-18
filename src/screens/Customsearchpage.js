import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Customsearchpage = () => {
  const [data, setdata] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;
  console.log(state);
  async function fetchArticles() {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${state}&apiKey=92950858d255430788197912e5b80db4`
      );
      const customArticles = await response.json();
      console.log(customArticles);
      if (Array.isArray(customArticles.articles)) {
        const modifiedcustomArticles = [];

        customArticles.articles.forEach((currentArticle) => {
          // Check if the current article has a title
          if (
            (currentArticle.title,
            currentArticle.urlToImage,
            currentArticle.description)
          ) {
            // If it has a title, add it to the modifiedcustomArticles array
            modifiedcustomArticles.push(currentArticle);
          }
        });
        setdata(modifiedcustomArticles);
        console.log(modifiedcustomArticles);
      }
    } catch (error) {
      if (error) {
        console.log(error.message);
      }
    }
  }

  useEffect(() => {
    fetchArticles();
  }, [state]);

  return (
    <div className="container">
      <div>
        <h3>Top News From {state}</h3>
      </div>
      {!data ? (
        <p>loading</p>
      ) : data.length === 0 ? (
        <p id="error"> Sorry, we couldn't find any results for your search.</p>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default Customsearchpage;
