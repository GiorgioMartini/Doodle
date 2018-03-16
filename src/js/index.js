import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
    render() {
      return (
        <div>
          <h1 className="pa4">
          Babbel bowlingo
          </h1>
          <p>Hello {this.props.name}</p>
        </div>
      );
    }
  }
  
ReactDOM.render(
<HelloMessage name="Giorgio" />,
document.getElementById('root')
)

