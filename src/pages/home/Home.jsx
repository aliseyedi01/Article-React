import Navbar from "./../../components/navbar/Navbar";
import Article from "./../../components/article/Article";
import styled from "./home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Snipper from "../../components/spinner/Spinner";

function Home() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:8000/articles")
      .then((result) => {
        setArticles(result.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container">
        <h2 className={styled.title}>Articles </h2>

        {isLoading ? (
          <Snipper />
        ) : (
          <div className={styled.articleWrapper}>
            {articles.map((article) => (
              <Link to={`/article/${article.id}`}>
                <Article key={article.id} article={article} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
