import styled from "./article.module.css";
import nature from "./../../assets/image/nature.jpg";

function Article(props) {
  return (
    <div className={styled.articleWrapper}>
      <img src={nature} alt="nature" />
      <h2>{props.article.title}</h2>
      <span>Read : {props.article.readingTime} minutes</span>
    </div>
  );
}

export default Article;
