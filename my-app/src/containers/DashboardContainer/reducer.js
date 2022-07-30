import { GET_WEATHER_DATA_REQUEST, GET_WEATHER_DATA_SUCCESS } from "./constant"


const initialState = {
    weatherData : []
}

const dashboardReducer = (state = initialState, action ) => {
    switch (action.type) {
        case GET_WEATHER_DATA_REQUEST:
            return {
                ...state
            };
        case GET_WEATHER_DATA_SUCCESS: 
            return {
                ...state,
                weatherData : action.payload.data
            }
        default:
            return {
                ...state
            }
    }
}