import axios from "axios";
import { GET_WEATHER_DATA_REQUEST, GET_WEATHER_DATA_SUCCESS } from './constant';

export const getWeatherDataAPI = (props) => async (dispatch) => {
    try {
        dispatch({ type: GET_WEATHER_DATA_REQUEST });
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props}&units=metric&appid=874af10f7b06699f85fb8639d977e601`)
        console.log("data", response)
        dispatch({ type: GET_WEATHER_DATA_SUCCESS, payload: [response.data] })
    } catch (error) {
        console.log(error);
    }
}