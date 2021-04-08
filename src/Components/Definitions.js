import Meanings from "./Meanings";
import "./Definitions.css";

function Definitions(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div className="Definitions">
        <div className="light-green">
          <h2 className="main-word">{props.data.word}</h2>
          <small className="phonetics">{props.data.phonetics[0].text} 🔊</small>
          <br />
          {/* <h4 className="definition-section">Definitions</h4> */}
          {props.data.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meanings data={meaning} />
              </div>
            );
          })}
          <br />
          <h4>Synonyms</h4>
          {/* <ul className="synonyms">
            <li className="word">breathtaking</li>
            <li className="word">amazing</li>
            <li className="word">stunning</li>
            <li className="word">astounding</li>
            <li className="word">astonishing</li>
            <li className="word">stupendous</li>
            <li className="word">awe-inspiring</li>
            <li className="word">staggering</li>
            <li className="word">extraordinary</li>
            <li className="word">unbelievable</li>
            <li className="word">incredible</li>
          </ul> */}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Definitions;
