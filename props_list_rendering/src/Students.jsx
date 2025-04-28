import React from 'react'

const Students = (abc) => {
    console.log(abc)
    const data=abc
  return (
    <div>
       <h1> {data.student1}</h1>
        <h3>{data.student2.name}</h3>
    </div>
  )
}

export default Students


// function a(x,y){

// }

// a(10,20)