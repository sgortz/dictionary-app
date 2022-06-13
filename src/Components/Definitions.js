import Meanings from "./Meanings";
import Phonetics from "./Phonetics";

import "./Definitions.css";

function Definitions(props) {
  if (props.data) {
    return (
      <div className="light-green">
        <h2 className="main-word">{props.data.word}</h2>
        <ul className="Phonetics">
           {props.data.phonetics.map((phonetic, index) => (
             <Phonetics key={index} phonetic={phonetic} />
           ))}
         </ul>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings data={meaning} handleSearch={props.handleSearch} />
            </div>
          );
        })}
        <br />
      </div>
    );
  } else {
    return null;
  }
}

export default Definitions;
