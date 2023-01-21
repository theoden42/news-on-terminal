const axios = require('axios').default;
require('dotenv').config();

getNews = async (keywordP, countP) => {

    const reqbody = {
        action: "getArticles",
        keyword: keywordP,
        articlesPage: 1,
        articlesCount: countP,
        articlesSortBy: "date",
        articlesSortByAsc: false,
        articlesArticleBodyLen: -1,
        resultType: "articles",
        dataType: [
          "news",
          "pr"
        ],
        apiKey: process.env.apiKey,
        forceMaxDataTimeWindow: 31
    };


    

    try{
        const response = await axios.post('http://eventregistry.org/api/v1/article/getArticles', reqbody, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log(response.data);
    }catch(error){
        console.log(error);
    }

}


getNews("BArack, 5");