import React from 'react'

const Temp = (details) => {
    console.log(details)
    // const detailsMain=details;
  return (
    <div>
        <h1>{details.tempDetails.day}</h1>
        {/* <h1>{detailsMain.day}</h1> */}
    </div>
  )
}

export default Temp