import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import "./Meanings.css";

function Meanings(props) {
  return (
    <div className="Meanings">
      <h5 className="part-of-speech">{props.data.partOfSpeech}</h5>
      {props.data.definitions.map((definition, index) => (
        <div key={index}>
          <ul>
            <li>{index + 1}.{" "} {definition.definition}</li>
            <li className={definition.example ? "example" : "inactive"}> Example: {definition.example}</li>
          </ul>
          {definition.synonyms ? <Synonyms data={definition.synonyms} handleSearch={props.handleSearch} /> : null}
          {definition.antonyms ? <Antonyms data={definition.antonyms} handleSearch={props.handleSearch} /> : null}
        </div>
      )
      )}
      {props.data.synonyms.length > 0 ? <Synonyms synonyms={props.data.synonyms} handleSearch={props.handleSearch} /> : null}
      {props.data.antonyms.length > 0 ? <Antonyms antonyms={props.data.antonyms} handleSearch={props.handleSearch} /> : null}
    </div>
  );
}

export default Meanings;