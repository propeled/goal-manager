import React, { Component } from 'react';
import './App.css';
import { type } from 'os';

type AppProps = {
  children: Component
}

class App extends Component<AppProps, {}>{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
