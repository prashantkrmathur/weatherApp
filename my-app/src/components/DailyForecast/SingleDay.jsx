import React from 'react';
import "./SingleDay.css";

const SingleDay = (props) => {
  const { day, temp, cloud } = props;
  return (
    <div className='DailyForecastDiv'>
      <input type="radio" name="active_day" value="0" checked="checked" class="DailyForecastInput"></input>
      <div className='ForeCast'>
        <p>{day}</p>
        <p><span>{`${temp.min}`}<sup>° &nbsp;</sup></span>
          <span>{`${temp.max}`}<sup>° &nbsp;</sup></span></p>
        <img ></img>
        <p>{cloud}</p>

      </div>
    </div>
  )
}

export default SingleDay;