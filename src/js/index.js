import React from 'react'
import ReactDOM from 'react-dom'
import store from './BowlingStore'
import Game from './Game'
  
ReactDOM.render(
<Game store={store} />,
document.getElementById('root')
)