import React from 'react'

export default class Product extends React.Component {
  render() {
    console.log(this,"this")
    console.log(this.props.singleProduct)
    return (
      <div>
     <h1>   {this.props.singleProduct.title}</h1>
     <p>   {this.props.singleProduct.price}</p>
      </div>
    )
  }
}















// const a={
//     name:"vineeth",
//     job:"react devloper",
//     sal:56000
// }


// (props)