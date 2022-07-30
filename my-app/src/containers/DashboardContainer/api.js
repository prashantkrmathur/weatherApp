import axios from 'axios';



export const getWeatherDataAPI = async (params) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=18.9667&lon=72.8333&exclude=minutely,alerts&units=metric&appid=e4c70ce6a6821649a416cb9521d5f4f8`;
    try {
        const response = await axios.get(API_URL);
        console.log("response", response);
        return response;
    } catch (error) {
        throw error;
    }
}