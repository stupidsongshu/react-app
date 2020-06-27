import React, { Component } from 'react'
import { WrapWithUsername } from '../index'

interface Props {
  name: string
}

class Bye extends Component<Props, any> {
  render() {
    return <div>Bye, {this.props.name}~</div>
  }
}

export default WrapWithUsername(Bye)
