import React, { Component } from 'react'

export class Car extends Component {
    render() {
        return (
            <h2>Hi, I am a {this.props.brand} Car!</h2>
        )
    }
}

export default Car
