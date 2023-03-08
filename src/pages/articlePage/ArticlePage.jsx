import Navbar from "../../components/navbar/Navbar";
import styled from "./articlePage.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Snipper from "../../components/spinner/Spinner";

function ArticlePage() {
  const [article, setArticle] = useState({});
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);

  // console.log(params.id);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8000/articles/${params.id}`)
      .then((result) => {
        setArticle(result.data);
        setIsLoading(false);
        // console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [params.id]);

  return (
    <div>
      <Navbar />

      {isLoading ? (
        <Snipper />
      ) : (
        <div className={styled.articleWrapper}>
          <h1>{article.title}</h1>
          <div className={styled.articleInfo}>
            <span>date : {article.date}</span>
            <span>author : {article.author}</span>
            <span>read : {article.readingTime} minutes</span>
          </div>
          <div className={styled.imageWrapper}>
            <img src={article.imageUrl} alt="nature" />
            <p>{article.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticlePage;
