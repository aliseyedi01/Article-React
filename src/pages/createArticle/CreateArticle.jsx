import Input from "../../components/input/Input";
import Navbar from "../../components/navbar/Navbar";
import styled from "./createArticle.module.css";
import { useState } from "react";
import Textarea from "../../components/textarea/TextArea";
import axios from "axios";

function CreateArticle() {
  const [article, serArticle] = useState({
    title: "",
    date: "",
    readingTime: "",
    author: "",
    content: "",
    imageURL: "",
  });

  const handleChangeArticle = (e) => {
    serArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangeContent = (e) => {
    serArticle((prevState) => ({
      ...prevState,
      content: e.target.value,
    }));
  };

  let num = Math.floor(Math.random() * 10000);

  const handleCreateArticle = () => {
    console.log(article);
    axios.post("http://localhost:8000/articles", {
      id: num,
      imageUrl: article.imageURL,
      title: article.title,
      readingTime: article.readingTime,
      date: article.data,
      author: article.author,
      content: article.content,
    });
  };

  // console.log(article);

  return (
    <div>
      <Navbar />
      <div className={styled.createArticle}>
        <h1>create article</h1>

        <Input data="title" handleChange={handleChangeArticle} />
        <Input data="date" handleChange={handleChangeArticle} />
        <Input data="readingTime" handleChange={handleChangeArticle} />
        <Input data="author" handleChange={handleChangeArticle} />
        <Input data="imageURL" handleChange={handleChangeArticle} />
        <Textarea handleChange={handleChangeContent} />

        <div className={styled.buttonWrapper}>
          <button onClick={handleCreateArticle}>Create Article</button>
        </div>
      </div>
    </div>
  );
}

export default CreateArticle;
