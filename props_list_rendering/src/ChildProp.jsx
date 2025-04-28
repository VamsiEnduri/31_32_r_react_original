import React from 'react'

const ChildProp = (data) => {
    console.log(data)
  return (
    <div>{data.children}</div>
  )
}

export default ChildProp