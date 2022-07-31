import React, { useState } from 'react';
import "./SingleDay.css";

const SingleDay = (props) => {
  const { day, temp, cloud, key } = props;
console.log("props",props);
  return (
    <div className='DailyForecastDiv'>
      <div className='ForeCast' key={key}>
        <p>{day}</p>
        <p><span>{(`${temp.min}`).split(".")[0]}<sup>° &nbsp;</sup></span>
          <span>{(`${temp.max}`).split(".")[0]}<sup>° &nbsp;</sup></span></p>
        <img ></img>
        <p>{cloud}</p>

      </div>
    </div>
  )
}

export default SingleDay;