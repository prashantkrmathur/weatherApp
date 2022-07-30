import { createAction } from 'redux-actions';
import { GET_WEATHER_DATA_REQUEST, GET_WEATHER_DATA_SUCCESS } from './constant';

export const getWeatherDataRequest = createAction(GET_WEATHER_DATA_REQUEST);
export const getWeatherDataSucess = createAction(GET_WEATHER_DATA_SUCCESS);
