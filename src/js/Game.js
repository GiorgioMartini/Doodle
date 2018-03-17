import React from 'react'
import {observer} from 'mobx-react'

@observer
export default class Game extends React.Component {
    render() {
      return (
        <div>
          <h1 className="ma0 pa5 bg-near-black tc white">
          Babbel bowling
          </h1>
          <div className="mw8 center pt4">
            <div className="pv6 ba ">
            <p>frames: {this.props.store.frames}</p>
            </div>
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