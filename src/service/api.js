import axios from 'axios';
const URL = 'http://localhost:8000';
const getNews = async (page,size=5)=>{
    try {
        return await axios.get(`${URL}/news`)
    } catch (error) {
        console.log('error while calling the api');
    }
};
export {getNews};