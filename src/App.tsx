import * as React from 'react';
import Form from './components/wrappers/Form';
import './App.css';


class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="App">
       {this.props.children}
      </div>
    );
  }
}

export default App;
