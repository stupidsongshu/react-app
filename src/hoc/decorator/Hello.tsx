import React, { Component } from 'react'
import { WrapWithUsername, WrapWithHeight, refHoc } from '../index'

interface Props {
  name?: string,
}

// class Hello extends Component<Props, any> {
//   render() {
//   return <div>Decorator: Hello, {this.props.name}!</div>
//   }
// }
// export default WrapWithUsername(WrapWithHeight(175)(Hello))


@WrapWithUsername
@WrapWithHeight(170)
@refHoc
class Hello extends Component<Props, any> {
  render() {
    return <div>Decorator: Hello, {this.props.name}!</div>
  }
}
export default Hello
