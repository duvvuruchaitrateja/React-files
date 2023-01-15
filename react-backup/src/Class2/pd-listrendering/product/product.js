import React, { Component } from 'react'

 class product extends Component {
    state={
        qty:1
    }
    decrHandler=()=>{
        this.setState({qty:this.state.qty-1})
    }
    incrHandler=()=>{
        this.setState({qty:this.state.qty+1})
    }
  render() {
    return (
      <div>
        <h1>RANGA HAIR STYLE</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <h2>QTY:{this.state.qty}</h2>
        <button onClick={this.decrHandler}>DECR</button>
        <button onlick={this.incrHandler}>INCR</button>
      </div>
    )
  }
}
export default product
