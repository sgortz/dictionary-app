import Meanings from "./Meanings";

import "./Definitions.css";

function Definitions(props) {
  if (props.data) {
    return (
      <div className="light-green">
        <h2 className="main-word">{props.data.word}</h2>
        <small className="phonetics">{props.data.phonetics[0].text}</small>
        {"   "}
        <a
          href={props.data.phonetics[0].audio}
          target="_blank"
          className="audio"
          rel="noreferrer"
        >
          <i className="fas fa-volume-up"></i>
        </a>
        <br />
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings data={meaning} />
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
