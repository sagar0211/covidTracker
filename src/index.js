import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"


class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Covid-19 Tracker</h1>
        <App/>
      </div>
  
      );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
