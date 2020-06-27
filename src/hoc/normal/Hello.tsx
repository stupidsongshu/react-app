import React, { Component } from 'react'
import { WrapWithUsername } from '../index'

interface Props {
  name: string
}

class Hello extends Component<Props, any> {
  render() {
    return <div>Hello, {this.props.name}!</div>
  }
}

export default WrapWithUsername(Hello)
