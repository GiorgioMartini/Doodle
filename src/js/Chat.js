import React from 'react'
import {observer} from 'mobx-react'
import axios from 'axios'

@observer
export default class Chat extends React.Component {
  sendMsg(){    
    axios.post(this.props.store.url, {
      message: this.props.store.message,
      author: 'Giorgio'
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
  }
  onChange (event) {
    this.props.store.message =  event.target.value
  }
  render() {
      const { message, token }  = this.props.store
      return (
        <div className="flex flex-column h-100">
          <div className="ph5 pv2 chat-background flex-auto">
          </div>
          <div className="pa2 bg-blue">
          <div className="mw8 center db">
            <div className="cf">
              <div className="fl w-90 pr3">
                <input onChange={this.onChange.bind(this)} placeholder="Message" className="ba bw1 h2 pa3 b--dark-blue br2 w-100" type="text"/>
              </div>
              <div className="fl w-10">
                <button type="button" onClick={this.sendMsg.bind(this)} className="white w-100 h2 bg-orange br2 b--orange br2">Send</button>
              </div>
            </div>
          </div>
          </div>
        </div>
      )
    }
  }