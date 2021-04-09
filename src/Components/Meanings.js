import Synonyms from "./Synonyms";
import "./Meanings.css";

function Meanings(props) {
  return (
    <div className="Meanings">
      <h6 className="part-of-speech">{props.data.partOfSpeech}</h6>

      {props.data.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <ul>
              <li>{definition.definition}</li>
              <li className="example">Example: {definition.example}</li>
            </ul>
            <Synonyms data={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}

export default Meanings;
