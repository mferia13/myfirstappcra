import {useRef, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {run} from './fibonacci.js';

function App() {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      //console.log(event);
      console.log("Button clicked");
      run(new Date);
    };
    const element = ref.current;
    element.addEventListener("click", handleClick);
    return () => {
      element.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section id="game-play">
        <p>Presiona el botón para calcular y mostrar la Serie de Fibonnaci:</p>
        <button ref={ref}>Calcular Serie</button>
      </section>
      <section id="game-result">
        <p id="seedsAndDate">No se ha calculado la serie por ahora.</p>
      </section>
    </div>
  );
}

export default App;