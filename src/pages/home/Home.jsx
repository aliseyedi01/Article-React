import Navbar from "./../../components/navbar/Navbar";
import Article from "./../../components/article/Article";
import styled from "./home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/articles")
      .then((result) => {
        setArticles(result.data.data);
        //   console.log(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   console.log(articles);

  return (
    <div>
      <Navbar />

      <div className="container">
        <h2 className={styled.title}>Articles </h2>

        <div className={styled.articleWrapper}>
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
