// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       count:0  // initial value
//     }
//   }

//   handleClickIncrement=()=>{
//     this.setState({count : this.state.count+1}) // updater function state
//   }
//   handleClickDecrement=()=>{
//     this.setState({count:this.state.count-1})
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClickIncrement} disabled={this.state.count==10}>+</button>
//         <button onClick={this.handleClickDecrement} disabled={this.state.count ==0}>-</button>
//         <button onClick={()=>this.setState({count:0})}>reset</button>
//       </div>
//     )
//   }
// }


//--------------------------- Counter App example









// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       color:"#ffffff"
//     }
//   }
//   // const a=20;

//   handleRandomClr=()=>{

//     let chars="abcdef0123456789";

//     let hexa="#"
//     for(let i=0;i<6;i++){  
//         //  console.log(i)
//         const randomNumber=Math.floor(Math.random() * chars.length)
//         console.log(chars[randomNumber])
//         hexa +=chars[randomNumber]
//     }
//     console.log(hexa,"color code")
//     this.setState({color:hexa})
//   }

//   render() {
//     console.log(this.state.color,"state color")
//     return (
//       <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:this.state.color}}>
//         <button onClick={this.handleRandomClr}>RandomClr</button>
//       </div>
//     )
//   }
// }




// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       quote:"practice makes man perfect",
//       color:"#ffffff"
//     }
//   }

//   handleRandom=()=>{
//     const teluguQuotes = [
//       "ప్రయత్నం లేకుండా విజయము అసాధ్యం!",
//       "నీ కలలు నీలోనే ప్రారంభమవాలి.",
//       "ఓడిపోవడం కాదు, నిలబడే ధైర్యం ముఖ్యం!",
//       "నువ్వు నువ్వే సృష్టించే విజయాన్ని మరెవ్వరూ తగిలించలేరు.",
//       "ప్రతి ప్రయత్నం ఒక విజయం!",
//       "సమయం తక్కువగా ఉంటే, ప్రయత్నం ఎక్కువగా చేయాలి.",
//       "నిన్నటి తప్పులే నేటి విజయం.",
//       "మీరు శక్తి కనబరిచినప్పుడు ప్రపంచం కూడ మీను ఆదరిస్తుంది.",
//       "జీవితాన్ని మార్చాలంటే, ఒక చిన్న అడుగు పెట్టాలి.",
//       "విజయానికి దారి ఒకే – నిరంతర పోరాటం.",
//       "నువ్వు సృష్టించు విజయమే నిన్ను ఆదరిస్తుంది.",
//       "కష్టాలే పాఠాలు, విజయం అలవాటుగా వస్తుంది.",
//       "ప్రయత్నం తప్పనిసరిగా ఉంటే, విజయాన్ని తప్పించలేము.",
//       "ఏడుపు అలవాటు చేయు, కానీ నిలబడటం నేర్చుకో.",
//       "నీవు లేని చోట, నీ ప్రయత్నాలు ఉంటాయి.",
//       "విజయం బహుమతి కాదు, అది కృషికి ఫలితం.",
//       "కాలాన్ని వృథా చేయకు – అది తిరిగి రావడం లేదు.",
//       "నిన్ను నీవు నమ్ము, ప్రపంచం నిన్ను మరిచినా సరే.",
//       "శ్రమిస్తే శిఖరాలు దక్కుతాయి.",
//       "పెద్ద కలలు కని, వాటిని నిజం చేయి.",
//       "గెలుపు మీ గమ్యం కాదు, అది మీ అలవాటు కావాలి.",
//       "ఒకే దారిలో వెళ్ళిపోకు, నీ దారిని నీవే సృష్టించు.",
//       "ఆలోచించు, ఆచరించు, సాధించు.",
//       "ఎప్పటికైనా ప్రారంభించు, ఆలస్యం అయినా సరే.",
//       "నీ స్వప్నాలకు నీ కాళ్లు పెట్టు.",
//       "తప్పులు పాఠాలు అవుతాయి, వాటిని భయపడవద్దు.",
//       "విజయం శబ్దం కాదు, అది శ్రమల యొక్క నిశ్శబ్ద ప్రతిఫలం.",
//       "ఒక గొప్ప వ్యక్తి అనగానే, అతను ఎన్నో ఓటములు ఎదుర్కొన్నవాడు.",
//       "తన మీద నమ్మకమున్నవాడే ఎప్పటికైనా ముందుకు వెళ్తాడు.",
//       "జీవితంలో ప్రతి అడుగు గమ్యాన్ని దగ్గర చేస్తుంది.",
//       "నీ పరిస్తితిని శాపించకు – మార్పును మొదలుపెట్టు.",
//       "నీవు చేసిన కృషి ఎప్పటికైనా ఫలిస్తుంది.",
//       "ఓడిన తర్వాతే గెలుపు విన్నూతనం తెలుస్తుంది.",
//       "ప్రపంచాన్ని మార్చాలంటే ముందు నీ ఆలోచనల్ని మార్చు.",
//       "కష్టం తప్పదు, కాని దాని ఫలం మధురం.",
//       "గమ్యం చూసే కళ్ళు ఉండాలి, కాదు అనే మనస్సు కాదు.",
//       "ప్రతిఒక్క రోజు ఓ కొత్త అవకాశం.",
//       "నీవు రాణించాలంటే, సంతోషంగా కాదు – కృషిగా ఉండాలి.",
//       "ఒక్కసారి ఓడినప్పుడు ఆగిపోవద్దు, అది మొదటి అడుగే.",
//       "కలలు చూస్తే చాలు కాదు, వాటి కోసం పనిచేయాలి.",
//       "ఆలస్యం జీవితం దొరకకుండా చేస్తుంది.",
//       "నువ్వు చేసే ప్రతి పని నీపై ఒప్పిగానుంది.",
//       "ఆత్మవిశ్వాసం విజయానికి మూలాధారం.",
//       "నవ్వుతూ ముందుకు సాగితే బాధలు వెనక్కి తగ్గతాయి.",
//       "మాటల కంటే పనిచేయడమే గొప్పది.",
//       "మీరు ప్రారంభించకపోతే, గమ్యం చేరకపోవచ్చు.",
//       "విజయం కోసం shortcuts వద్దు – కేవలం true effort చాలు.",
//       "నీ విజయం మీద నువ్వే గర్వపడగలిగితే అదే నిజమైన గెలుపు.",
//       "పదేళ్లలో నీకోసం చేసినవి గుర్తు రావు, కానీ నీవు చేసినవి గుర్తుంటాయి.",
//       "కష్టపడితే దేవుడే నీకు మార్గం చూపిస్తాడు.",
//     ];


//   const quoteIndex=  Math.floor(Math.random() * teluguQuotes.length);

//   const randomQuote=teluguQuotes[quoteIndex]  // const a=["vamsi","ravi","raju"]  a[0]

//     // this.setState({quote:randomQuote})

// let chars="abcdef0123456789";

// let randomColor="#";

// for(let i=0;i<6;i++){
//   const randomColorIndexx=Math.floor(Math.random() *chars.length)
//   randomColor +=chars[randomColorIndexx]
// }

// this.setState({color:randomColor,quote:randomQuote})
//   }
//   render() {
//     return (
//       <div style={{backgroundColor:this.state.color}}>
//         <h1>{this.state.quote}</h1>
//         <button onClick={this.handleRandom}>RandomQuote&RandomClr</button>
//       </div>
//     )
//   }
// }



// import React, { Component } from 'react'
// import { CiSun } from "react-icons/ci";
// import { FaMoon } from "react-icons/fa6";

// export default class App extends Component {

//   constructor(){
//     super()
//     this.state={
//       a:false, //true // false
//     }
//   }
//   themeToggleHandler=()=>{
// this.setState({a:!this.state.a})
//   }
//   render() {
//     return (
//       <div style={{backgroundColor:this.state.a? "black" : "white"}}> 
//       {/* true?"black":"white" */}
//         <button onClick={this.themeToggleHandler}>{this.state.a ?<CiSun />:<FaMoon />}</button>
//       </div>
//     )
//   }
// }



// import React, { Component } from 'react'
// import SignUp from "./SignUp"
// import Navbar from './Navbar'
// export default class App extends Component {
      

   
//   render() {
//     return (
//       <div>
//        <Navbar />
//        {/* {isSignUp&& <SignUp />} */}
//       </div>
//     )
//   }
// }




// import React, { Component } from 'react';
// import './App.css'; // Import the CSS file


// class FormToggle extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isLogin: true // Initial state shows the login form
//     };
//   }


//   toggleForm = () => {
//     this.setState(prevState => ({ isLogin: !prevState.isLogin }));
//   }


//   render() {
//     return (
//       <div className="container">
//         <div className="form">
//           <h2 className="heading">
//             {this.state.isLogin ? 'Login' : 'Sign Up'}
//           </h2>


//           {/* Login Form */}
//           {this.state.isLogin ? (
//             <div>
//               <input type="text" placeholder="Username" className="input" />
//               <input type="password" placeholder="Password" className="input" />
//               <button className="button">
//                 Login
//               </button>
//             </div>
//           ) : (
//             // Signup Form
//             <div>
//               <input type="text" placeholder="Username" className="input" />
//               <input type="email" placeholder="Email" className="input" />
//               <input type="password" placeholder="Password" className="input" />
//               <button className="button">
//                 Sign Up
//               </button>
//             </div>
//           )}


//           {/* Toggle Button */}
//           <button
//             className="toggle-button"
//             onClick={this.toggleForm}
//           >
//             {this.state.isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
//           </button>
//         </div>
//       </div>
//     );
//   }
// }


// export default FormToggle;


import React, { Component } from 'react'
import "./App.css"
export default class App extends Component {
  constructor(){
    super()
    this.state={
      isLoggedIn:true
    }
  }
  updateState=()=>{
    this.setState({isLoggedIn : !this.state.isLoggedIn})
  }
  render() {
    return (
      <div id='container'>
             <h1>{this.state.isLoggedIn ? "Login" :"SignUp"}</h1>
        {this.state.isLoggedIn ?
         <div>
        <form action="" id='loginForm'>
            <input type="email" placeholder='email ' />
            <input type="password" placeholder='pswd' />
            <button>Login</button>
        </form>
      </div>:
    <div>
         <form action="" id='signUpForm'>
            <input type="text" placeholder='name'/>
            <input type="email" placeholder='email ' />
            <input type="password" placeholder='pswd' />
            <input type="password" placeholder='confirm pswd'  />
            <button>SignUp</button>
        </form>
      </div>
      
    }
    <button onClick={this.updateState}>{this.state.isLoggedIn ? "Switch to signup" :"switch to login"}</button>
      </div>
    )
  }
}

