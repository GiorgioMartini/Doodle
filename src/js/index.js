import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
    render() {
      return (
        <div>
          <h1 className="pa4">Babbel bowlingjjj</h1>
          Hello {this.props.name}
        </div>
      );
    }
  }
  
ReactDOM.render(
<HelloMessage name="Giorgio" />,
document.getElementById('root')
)

