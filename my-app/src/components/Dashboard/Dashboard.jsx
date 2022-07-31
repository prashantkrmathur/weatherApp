import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HourlyChart from '../Chart.js/HourlyChart';
import DailyForeCast from '../DailyForecast/DaillyForeCast';
import "./Dashboard.css";

const Dashboard = (props) => {
  const [initialSearch, setIntialSearch] = useState('Patna');
  const [data, setData] = useState([]);
  const [text, setText] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  }
  const getWeatherDataAPI = async(text) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=874af10f7b06699f85fb8639d977e601`)
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  const handleSearch = () => {
    getWeatherDataAPI(initialSearch);
    setIntialSearch( )
  }


  return (
    <div className='main-container'>
      <div >
        <span className='map-logo'> <i className="fa fa-map-marker" style={{ fontSize: "36px" }}></i></span>
        <input onChange={(e) => handleChange(e)} type="text" className='input-style'
          placeholder='Enter the City Name'
        />
        <span className='search-logo' onClick={handleSearch} ><i className="fa fa-search"></i></span>
      </div>
      <DailyForeCast
        data={data}
      />
    </div>
  )
}

export default Dashboard