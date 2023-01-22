const axios = require('axios').default;

exports.getNews = async (keywordP, countP) => {


    const reqbody = {
        action: "getArticles",
        keyword: keywordP,
        lang: "eng",
        articlesPage: 1,
        articlesCount: countP,
        articlesSortBy: "date",
        articlesSortByAsc: false,
        articlesArticleBodyLen: 500,
        resultType: "articles",
        dataType: [
          "news"
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
        return response.data;
    }catch(error){
       console.log(error);
        return "";
    }
}
