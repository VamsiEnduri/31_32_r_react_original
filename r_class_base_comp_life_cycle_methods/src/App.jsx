// import React, { Component } from 'react'
// import Details from './Details'

// export default class App extends Component {
//   constructor(){
//     super();
//     this.state={count:0}
//   }
 
//   handleClick=()=>{
//     this.setState({count:this.state.count+10}) // updation func {count:10}
//   }
//   render() {
//     return (
//      <>
//      <button onClick={this.handleClick}>incre</button>
//      {this.state.count}
//       <div>
//         <h1>hello there first class regarding react life cycle methods</h1>
//         <p>there are 3 methods</p>
//         <span>
//           compDidMount</span>
//           <span>compDidUpdate</span>
//           <span>compWillunMount</span>
//       </div>
//       <Details />
//      </>
//     )
//   }


//    componentDidMount(){
//     console.log("comp created and im mounting pahse")
//     alert("comp created")
//   }
//   componentDidUpdate(){
//     alert("comp updated ")
//   }
// }


// first example basic example













// import React, { Component } from 'react'

// export default class App extends Component {

//   constructor(){
//     super();
//     this.state={
//            data:[]
//     }
//   }

//   handleData=()=>{
//     fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(res=>{
//       console.log(res);
//       this.setState({data:res}) 
//     })
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleData}>getData</button>
//         {this.state.data.map((p)=>{
//           return (
//             <>
//             <h1>{p.title}</h1>
//             </>
//           )
//         })}

//       </div>
//     )
//   }
// }





import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      data:[],
    loading:true  //false
    }
  }
  componentDidMount(){
    let dataFromLS=JSON.parse(localStorage.getItem("fakeData"))
    if(dataFromLS){
      this.setState({data:dataFromLS,loading:false})
      // this.setState({loading:false})
    }
   else{
     fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(res=>{
      console.log(res);
      this.setState({data:res})
      localStorage.setItem("fakeData",JSON.stringify(res))
      this.setState({loading:false})
    })
   }
  }
  render() {
  if(this.state.loading){
     return <h1>data fetching ..pls wait</h1>
  }
    return (
      <div>
        <h1>fakestore api products</h1>
        {this.state.data.map((p)=>{
          return(
            <>
            <p>{p.title}</p>
            </>
          )
        })}
      </div>
    )
  }
}
