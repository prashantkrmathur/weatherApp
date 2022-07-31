import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SingleDay from './SingleDay';
import "./DailyForeCast.css"

const DailyForeCast = (props) => {
    const { data } = props;
    const [weekData, setWeekData] = useState([]);
    console.log("weekData", weekData);
    useEffect(() => {     
        if (data && data.coord) {
           getWeekDataAPI(data.coord.lat, data.coord.lon)
       }
    }, [data]);

    const getWeekDataAPI = async (latitude, longitude) => {
        var response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,alerts&units=metric&appid=874af10f7b06699f85fb8639d977e601`);
        if (response && response.data && response.data.daily) {
            setWeekData(response.data.daily);
        }
    };
    return (
        <div className='main-box' >
            {weekData && weekData.map((e) => {
                return <SingleDay
                    day={e.dt}
                    temp={e.temp}
                    cloud={e.weather[0].main}
               />
            }) }
       </div>
  )
}
export default DailyForeCast