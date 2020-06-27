import React, { Component } from 'react'
import { hijackHoc } from '../index'

interface State {
  count?: number
}

@hijackHoc
class Hijack extends Component<any, any> {
  state: State = {
    count: 0
  }

  handleClick() {
    this.setState({
      count: this.state.count! + 1
    })
  }

  render() {
  return <p onClick={() => this.handleClick()}>劫持 {this.state.count}</p>
  }
}

export default Hijack
