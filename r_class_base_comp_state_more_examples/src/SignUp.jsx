import React, { Component } from 'react'

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <form action="">
            <input type="text" placeholder='name'/>
            <input type="email" placeholder='email ' />
            <input type="password" placeholder='pswd' />
            <input type="password" placeholder='confirm pswd'  />
            <button>SignUp</button>
        </form>
      </div>
    )
  }
}
