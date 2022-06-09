import Dictionary from "./Components/Dictionary";
import woman_reading from "./images/woman_reading.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Pink">
        <div className="Green">
          <img
            src={woman_reading}
            alt="woman-reading"
            className="woman-reading"
          />
          <header className="App-header">
            <h1>
              <div className="first-title">Searching for</div>
              <div className="second-title">Meanings</div>
            </h1>
          </header>
          <Dictionary />
        </div>
      </div>
    </div>
  );
}

export default App;
