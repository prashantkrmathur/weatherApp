import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import SingleDay from './SingleDay';
import "./DailyForeCast.css"
import HourlyChart from '../Chart.js/HourlyChart';

const DailyForeCast = (props) => {
    const { data } = props;
    const [weekData, setWeekData] = useState([]);
    const [hourlyData, setHourlyData] = useState();

    let arr = ['Mon', "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", 'Mon', "Tue", "Wed", "Thu", "Fri"]
    let date = new Date();
    let day = date.getDay();
    var currDay;
    currDay = arr.slice(day, day + 8);

    useEffect(() => {     
        if (data && data.coord) {
           getWeekDataAPI(data.coord.lat, data.coord.lon)
       }
    }, [data]);

    const getWeekDataAPI = async (latitude, longitude) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,alerts&units=metric&appid=874af10f7b06699f85fb8639d977e601`);
        const { data } = response;
        setHourlyData(data);
        if (response && response.data && response.data.daily) {
            setWeekData(response.data.daily);
        }
    };
    return (
        <div>
        <div className='main-box' >
            {weekData && weekData.map((e,id) => {
                return <SingleDay
                    key={id}
                    id={id}
                    day={currDay[id]}
                    temp={e.temp}
                    cloud={e.weather[0].main}
               />
            }) }
            </div>
            {hourlyData &&<div className='chart-style'>
                <HourlyChart
                    data={hourlyData.hourly}
                />
            </div>}
        </div>
  )
}
export default DailyForeCast