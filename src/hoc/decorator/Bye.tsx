import React, { Component } from 'react'
import { WrapWithUsername, WrapWithHeight } from '../index'

interface Props {
  name?: string
}

@WrapWithHeight(180)
@WrapWithUsername
class Bye extends Component<Props, any> {
  render() {
  return <div>Decorator: Bye, {this.props.name}~</div>
  }
}

export default Bye
