//Functinal Component


// import React, { Component } from 'react'

// class  App extends React.Component {
//   render() {
//     return (
//       <div>
//         <First/>
//         <Second/>
//       </div>
//     );
//   }
// }

// class First extends React.Component{
//   render(){
//     return (
//       <div>
//         <h1> JavaTpoint</h1>
//       </div>
//     );
//   }
// }
// class Second extends React.Component{
//   render(){
//     return (
//       <div>
//         <h1> JavaTpoint</h1>
//         <p>Hello Java</p>
//       </div>
//     );
//   }
// }
// export default App;

// class component

// import React, { Component } from 'react';  
// class App extends React.Component {  
//  constructor() {  
//       super();  
//       this.state = {  
//          data:   
//          [  
//             {             
//                "name":"Abhishek"             ,
               
//                "id":"212"
//             },  
//             {            
//                "name":"Saharsh"             ,
//                "id":"231"
//             },  
//             {    
//                "name":"Ajay"          ,
//                "id":"123"
//             }  
//          ]  
//       }  
//    }  
//    render() {  
//       return (  
//          <div>  
//             <StudentName/>  
//             <ul>            
//                 {this.state.data.map((item) => <List data = {item} />)}           
//             </ul>  
//          </div>  
//       );  
//    }  
// }  
// class StudentName extends React.Component {  
//    render() {  
//       return (  
//          <div>  
//             <h1>Student Name Detail</h1>  
//          </div>  
//       );  
//    }  
// }  
// class List extends React.Component {  
//    render() {  
//       return (  
//          <ul>            
//             <li>{this.props.data.id}</li>   
//             <li>{this.props.data.name}</li>   

//          </ul>  
//       );  
//    }  
// }  
// export default App;  

// React Api

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';


//  class App extends React.Component {
//       constructor (){
//           super();
//           this.state = {
//                   msg:"Welcome to JavaTpoint"
//                          };
//                 this.updateSetState = this.updateSetState.bind(this);
//                   } 
//                   updateSetState(){
//                     this.setState({
//                       msg:"its a best reactjs tutorial"
//                     });
//                   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.msg}</h1>
//         <button onClick =  {this.updateSetState}>Set State </button>
        
//       </div>
//     )
//   }
// }
// export default App;

//  React Life Cycle

// REACT COMPONENT LIFECYCLE

// import React, { Component } from 'react';  
  
// class App extends React.Component {  
//    constructor(props) {  
//       super(props);  
//       this.state = {hello: "JavaTpoint"};  
//       this.changeState = this.changeState.bind(this)  
//    }    
//    render() {  
//       return (  
//           <div>  
//               <h1>ReactJS component's Lifecycle</h1>  
//               <h3>Hello {this.state.hello}</h3>  
//               <button onClick = {this.changeState}>Click Here!</button>          
//           </div>  
//       );  
//    }  
//    componentWillMount() {  
//       console.log('Component Will MOUNT!')  
//    }  
//    componentDidMount() {  
//       console.log('Component Did MOUNT!')  
//    }  
//    changeState(){  
//       this.setState({hello:"All!!- Its a great reactjs tutorial."});  
//    }  
//    componentWillReceiveProps(newProps) {      
//       console.log('Component Will Recieve Props!')  
//    }  
//    shouldComponentUpdate(newProps, newState) {  
//       return true;  
//    }  
//    componentWillUpdate(nextProps, nextState) {  
//       console.log('Component Will UPDATE!');  
//    }  
//    componentDidUpdate(prevProps, prevState) {  
//       console.log('Component Did UPDATE!')  
//    }  
//    componentWillUnmount() {  
//       console.log('Component Will UNMOUNT!')  
//    }  
// }  
// export default App;  


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet'

import Welcome from './components/welcome';
class App extends Component {
  render() {
    return (
      <div className="App">
  
  <Welcome/>

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;