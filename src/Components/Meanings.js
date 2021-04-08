import "./Meanings.css";

function Meanings(props) {
  return (
    <div className="Meanings">
      <h6 className="part-of-speech">{props.data.partOfSpeech}</h6>

      {props.data.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <ul >
              <li>{definition.definition}</li>
              <li className="example">{definition.example}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Meanings;

// meaning.definitions[0].definition

{
  /* <ul className="examples">
            <li>the awesome power of the atomic bomb</li>
          </ul>
          <h6>adverb</h6>
          <ul className="part-of-speech">
            <li>Extremely well; excellently.</li>
          </ul>
          <h6>adjective</h6>
          <ul className="part-of-speech">
            <li>
              Extremely impressive or daunting; inspiring great admiration,
              apprehension, or fear.
            </li>
          </ul>

           */
}
