import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AnotherComponent from './AnotherComponent';

function App() {
  const [count, setCount] = useState(0);
  function decrement() {
    setCount(prevCount => prevCount - 1);
  }
  function increment() {
    setCount(prevCount => prevCount + 1);
  }
  const someStyle = {
    background: 'blue',
  };
  return (
    <div className="App">
      <header className="App-header">
        <AnotherComponent name="Tesfamariam" />
        <div>
          <span>{count}</span>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {true && <p style={someStyle}>{5}</p>}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
