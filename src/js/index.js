import React from 'react'
import ReactDOM from 'react-dom'

class HelloMessage extends React.Component {
    render() {
      return (
        <div>
          <h1 className="ma0 pa5 bg-near-black tc white">
          Babbel bowling
          </h1>
          {/* <p>Hello {this.props.name}</p> */}
          <div className="mw8 center pt4">
            <div className="pa4">firld</div>
            <div className="cf">
              <div className="fl w-50">
              <button>Shoot!</button>
              </div>  
              <div className="fl w-50">
              <button>Shoot!</button>
              </div>  
            </div>
          </div>
        </div>
      )
    }
  }
  
ReactDOM.render(
<HelloMessage name="Giorgio" />,
document.getElementById('root')
)