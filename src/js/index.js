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
            <div className="pv6 ba ">field</div>
            <div className="cf">
              <div className="fl w-50 pa3">
                <button className="dim bg-orange white pv3 w-100 bn br3 ">Shoot!</button>
              </div>  
              <div className="fl w-50 pa3">
                <button className="dim bg-orange white pv3 w-100 bn br3 ">Shoot!</button>
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