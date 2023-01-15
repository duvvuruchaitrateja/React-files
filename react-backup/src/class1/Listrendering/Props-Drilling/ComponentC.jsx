import React, { Component } from 'react'
import ComponentD from './CompD'
class ComponentC extends Component {
    render() {
        return (
            <div>
                <h1>Component C</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                <hr />
                <ComponentD name={this.props.name} />
            </div>
        )
    }
}

export default ComponentC