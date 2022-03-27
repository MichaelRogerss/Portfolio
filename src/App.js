import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Full-Stack Web Developer
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reacttt
        </a>
        <div class="columns">
        <div class="column">
          First column
        </div>
        <div class="column">
          Second column
        </div>
        <div class="column">
          Third column
        </div>
        <div class="column">
          Fourth column
        </div>
      </div>
    </div>
  );
}

export default App;
