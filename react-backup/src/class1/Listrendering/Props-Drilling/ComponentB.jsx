import React, { Component } from 'react'
import ComponentC from './ComponentC'
 class ComponentB extends Component {
  render() {
    return (
      <div>
        <h1>Component B</h1>
        <pre>{JSON.stringify(this.props)}</pre>
        <hr/>
        <h3>Employee:{this.props.name}</h3>
        <ComponentC name={this.props.name}/>
      </div>
    )
  }
}
export default ComponentB