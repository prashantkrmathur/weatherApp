import React from 'react'

const SingleDay = (props) => {
    const { day, temp, cloud } = props;
  return (
      <div>
          <div className='align-items'>
              <p>{day}</p>
              <p>{`${temp.min} - ${temp.max}`}</p>
              <img ></img>
              <p>{cloud }</p>
          </div>
          
    </div>
  )
}

export default SingleDay;