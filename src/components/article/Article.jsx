import styled from "./article.module.css";

function Article(props) {
  return (
    <div className={styled.articleWrapper}>
      <div className={styled.imageWrapper}>
        <img src={props.article.imageUrl} alt="nature" />
      </div>
      <h2>{props.article.title}</h2>
      <span>Read : {props.article.readingTime} minutes</span>
    </div>
  );
}

export default Article;
