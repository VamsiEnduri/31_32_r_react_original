// import React from "react"
// class App extends React.Component{
 
//   constructor (){
//     super()
//     this.state={
//       count:0
//     }
//   }
//   handleClick=()=>{
//     this.setState({count:this.state.count+10}) 
//   }
//   render(){
//     return (
//       <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
//       <h1>App</h1>
//       <h1>{this.state.count}</h1>
//       <button onClick={this.handleClick}>Inc+1</button>
//       </div>
//     )
//   }
// }
// export default App





import React from "react"
class App extends React.Component{
 
  constructor (){
    super()
    this.state={
      color:"white"
    }
  }
  handleColor=(clr)=>{
    this.setState({color:this.state.color=clr})
  }
  render(){
    console.log(this.state.color,"color")
    return (
      <div  style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",backgroundColor:this.state.color}}>
      <h1>App</h1>
      <h1>{}</h1>
      <button onClick={()=>this.handleColor("red")}>Red</button>
      <button onClick={()=>this.handleColor("green")}>Green</button>
      <button onClick={()=>this.handleColor("yellow")}>Yellow</button>
      </div>
    )
  }
}
export default App


// for every stage chnage , react app will re-renders
// state is getting changed by a user action





// class based comp lo state use cheyyali antey, manaki compulsory constructor () function kavali
// state use cheyyai antey , confirm  ga this.state laga use cheyyali
// super () keyword / method usage compulsory in constructor function

// state is used to store the data of a comp as object
// to update the state , we need setState and we need to use it as this.setState()

// while updating the state, we need use setState as this.setState()
// setState()  is function which updates r modifies r mutates your old state (updater function)
// updater function always updates the state based on prev state

// for every state chnages, react app gets re-rendering