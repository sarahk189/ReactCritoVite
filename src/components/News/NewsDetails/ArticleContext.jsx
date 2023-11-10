import { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ArticleContext = createContext();

export const useArticles = () => {
  const context = useContext(ArticleContext);
  if (context === undefined) {
    throw new Error("useArticles must be used within an ArticleProvider");
  }
  return context;
};

export const ArticleProvider = ({ children }) => {
  const apiUrl = 'https://win23-assignment.azurewebsites.net/api/articles';
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState([null]);
  const { id } = useParams();

  useEffect(() => {
    const getArticles = async () => {
      try {
        const result = await fetch(apiUrl);

        if (result.status !== 200 && result.status !== 201) {
          console.log(`Error: ${result.status}`);
          return;
        }

        const data = await result.json();
        console.log('Articles:', data);
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles", error);
      }
    };

    const getArticle = async (articleId) => {
      try {
        if (articleId) {
          const result = await fetch(`${apiUrl}/${articleId}`);

          if (result.status !== 200) {
            console.log(`Error: ${result.status}`);
            return;
          }

          const data = await result.json();
          setArticle(data);
        }
      } catch (error) {
        console.error("Error fetching article", error);
      }
    };

      getArticles();
      getArticle(id);
    }, [id]);

  const contextValue = {
    articles, 
    article,
  };

  return (
    <ArticleContext.Provider value={contextValue}>
      {children}
    </ArticleContext.Provider>
  );
};