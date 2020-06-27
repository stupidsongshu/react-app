import React, { Component } from 'react'

interface State {
  name: string
}

export const WrapWithUsername = (WrappedComponent: any) => {
  console.log('WrapWithUsername')
  return class extends Component<any, any> {
    public state: State = {
      name: ''
    }

    componentWillMount() {
      const name = 'World'
      this.setState({
        name
      })
    }

    render() {
      return <WrappedComponent {...this.props} name={this.state.name} />
    }
  }
}

// 传参的高阶组件
export const WrapWithHeight = (height: number) => {
  console.log('WrapWithHeight')
  return (WrappedComponent: any) => {
    return class extends Component<any, any> {
      render() {
        return <div>
          <p>my height is {height}</p>
          <WrappedComponent {...this.props} />
        </div>
      }
    }
  }
}

// ref 组件实例
export const refHoc = (WrappedComponent: any) => {
  return class extends Component<any, any> {
    ref: any = null

    componentDidMount() {
      console.log(this.ref)
    }

    render() {
      return (
        <div>
          <WrappedComponent
            {...this.props}
            ref={(instance: any) => (this.ref = instance)}
          />
        </div>
      )
    }
  }
}

// 继承 劫持
// export const hijackHoc = (WrappedComponent: any) => {
//   return class extends Component<any, any> {
//     render() {
//       return (
//         <WrappedComponent
//           {...this.props}
//         />
//       )
//     }
//   }
// }
export function hijackHoc<T extends { new (...args: any[]): any }>(component: T) {
  return class extends component {
    handleClick() {
      alert('点击被劫持')
      super.handleClick()
    }
    render() {
      // return <div style={{backgroundColor: 'red'}}>页面被劫持</div>

      const parent = super.render()
      return React.cloneElement(parent, {
        style: {backgroundColor: 'red'},
        onClick: () => this.handleClick()
      })
    }
  }
}