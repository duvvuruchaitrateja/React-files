import React, { Component } from 'react'
import  ComponentB from './ComponentB'
 class ComponentA extends Component {
  ename="Rahul Gandhi-jadoo"
  render() {
    return (
      <div>
        <h1>Component A</h1>
        <h5>Employee Name:{this.ename}</h5>
        <hr/>
        <ComponentB name={this.ename}/>
      </div>
    )
  }
}
export default ComponentA
