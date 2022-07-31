import React, { useState } from 'react';
import "./SingleDay.css";

const SingleDay = (props) => {
  const { day, temp, cloud, id } = props;

  return (
    <div className='DailyForecastDiv'>
      <input type="radio" name="active_day" value={id} class="DailyForecastInput"></input>
      <div className='ForeCast' id={id}>
        <div>{day}</div>
        <div><span>{(`${temp.min}`).split(".")[0]}<sup>° &nbsp;</sup></span>
          <span>{(`${temp.max}`).split(".")[0]}<sup>° &nbsp;</sup></span></div>
          <div><img></img></div>
        <div>{cloud}</div>
      </div>
    </div>
  )
}

export default SingleDay;