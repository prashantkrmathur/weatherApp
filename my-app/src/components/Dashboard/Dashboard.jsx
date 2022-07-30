import React from 'react';
import "./Dashboard.css";
const Dashboard = (props) => {

  return (
    <div className="align center" style={{ margin: "auto", width: "700px" }}>
      <div>
        <span> <i class="fa fa-marker-map" style={{ fontSize: "36px" }} aria-hidden="true"></i></span>
        <input className='input-style' type="text" placeholder='Enter the city Name' />
        <span> <i class="fa fa-search" style={{ fontSize: "36px" }} aria-hidden="true"></i></span>
      </div>
    </div>
  )
}

export default Dashboard