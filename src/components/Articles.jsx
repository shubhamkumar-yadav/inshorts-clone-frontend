import React, { useEffect, useState } from 'react';
import { getNews } from '../service/api.js';
import { Article } from './Article.jsx';
const Articles = ()=>{
    const [news,setNews] = useState();
    const dailyNews = async ()=>{
        let response = await getNews();
        setNews(response.data);
    };
    useEffect(()=>{
        dailyNews();
    },[]);
    return (<>
        {news?.length>0&&news.map(article=>(
            <Article item={article}/>
        ))}
    </>);
};
export {Articles};