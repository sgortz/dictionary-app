import Synonyms from "./Synonyms";
import "./Meanings.css";

function Meanings(props) {
  return (
    <div className="Meanings">
      <h6 className="part-of-speech">{props.data.partOfSpeech}</h6>
      {props.data.definitions.map((definition, index) => (
        <div key={index}>
          <ul>
            <li>{index + 1}.{" "} {definition.definition}</li>
            <li className={definition.example ? "example" : "inactive"}> Example: {definition.example}</li>
          </ul>
          {definition.synonyms ? <Synonyms data={definition.synonyms.length} /> : null}
        </div>
      )
      )}
    </div>
  );
}

export default Meanings;
