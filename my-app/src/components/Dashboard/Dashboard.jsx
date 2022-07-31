import React from 'react';
import "./Dashboard.css";
const Dashboard = (props) => {

  return (
    <div className='main-container'>
      <div >
        <span className='map-logo'> <i className="fa fa-map-marker" style={{ fontSize: "36px" }}></i></span>
        <input type="text" className='input-style'
          placeholder='Enter the City Name'
        />
        <span className='search-logo' ><i className="fa fa-search"></i></span>
      </div>

    </div>
  )
}

export default Dashboard