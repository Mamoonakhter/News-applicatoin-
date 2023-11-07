import React from "react";
import "./Card.css";

const Card = ({
  urlToImage,
  author,
  publishedAt,
  title,
  description,
  content,
  url,
}) => {
  return (
    <>
      <div className="blog-card">
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage: `url(${urlToImage})`,
            }}
          />
          <ul className="details">
            <li className="author">
              <a href="#">{author}</a>
            </li>
            <li className="date">{publishedAt}</li>
            {/* <li className="tags">
              <ul>
                <li>
                  <a href="#">Learn</a>
                </li>
                <li>
                  <a href="#">Code</a>
                </li>
                <li>
                  <a href="#">HTML</a>
                </li>
                <li>
                  <a href="#">CSS</a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
        <div className="description">
          <h1>{title}</h1>
          <h2>{description}</h2>
          <p>{content}</p>
          <p className="read-more">
            <a href={url}>Read More</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
