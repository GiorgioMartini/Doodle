import React from 'react'
import ReactDOM from 'react-dom'
import store from './BowlingStore'
import Chat from './Chat'
  
ReactDOM.render(
<Chat store={store} />,
document.getElementById('root')
)