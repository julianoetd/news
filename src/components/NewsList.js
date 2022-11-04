import axios from "axios";
import React,{ useState, useEffect} from "react";
import NewsItem from "./NewsItem";

const NewsList = () => {
    var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2022-11-04&' +
          'sortBy=popularity&' +
          'apiKey=07c8cf4ec0a041dc88180c72b58e8c9e';
    const [ articles, setArticles] = useState([])

    useEffect(() =>{
        const getArticles = async () => {
            const response = await axios.get(url)
            console.log(response)
            setArticles(response.data.articles)
        }
        getArticles()
       
    }, [])
    return(
        <div>
        {articles.map(article => {
            return(
                <NewsItem 
                    title={article.title}
                    description={article.description}
                    url={article.url}
                    urlToImage={article.urlToImage} 
                    key={article.url}
                />
            )
        })}
    </div>
    )

}

export default NewsList

// 07c8cf4ec0a041dc88180c72b58e8c9e