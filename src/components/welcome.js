import React, { Component } from 'react'

 class Welcome extends Component {
     constructor() {
         super()
         this.state = {
             message:"welcome"
         }
     }
    render() {
        return <h1>{this.state}</h1>
    }
}


export default Welcome;
