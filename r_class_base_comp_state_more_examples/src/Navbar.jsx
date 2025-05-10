import React, { Component } from 'react'
import SignUp from './SignUp'
import Login from './Login'

export default class Navbar extends Component {
  
    constructor(){
        super()
        this.state={
            isSignup:false,
            isLoggedIn:false
        }
    }

    handleSignUp=()=>{
         this.setState({isSignup:!this.state.isSignup})
    }


    handleLogin=()=>{
        this.setState({isLoggedIn:!this.state.isLoggedIn})
    }

   
  render() {
      console.log(this.props,"props")
    return (
      <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"lightblue",alignItems:"center"}}>
        <h2>vamsiSolutions</h2>
        <div style={{display:"flex",gap:30}}>
            <button onClick={this.handleSignUp}>SignUp</button>
            <button onClick={this.handleLogin}>Login</button>
        </div>


{this.state.isSignup && <SignUp />}
{this.state.isLoggedIn && <Login />}
        
      </div>
    )
  }
}


