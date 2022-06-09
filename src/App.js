import Dictionary from "./Components/Dictionary";
import woman_reading from "./images/woman_reading.svg";
import PlantIllustration from "./images/plant_illustration";
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
             <PlantIllustration />
            </h1>
          </header>
          <Dictionary />
        </div>
        <footer><h6>Open-source code by <a href="https://github.com/sgortz/dictionary-app"> Sabrina Gortz</a> © 2021</h6>
        </footer>
      </div>
    </div>
  );
}

export default App;
