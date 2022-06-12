import Synonyms from "./Synonyms";
import "./Meanings.css";

function Meanings(props) {
  console.log('is there meaning: ', props)
  return (
    <div className="Meanings">
      <h5 className="part-of-speech">{props.data.partOfSpeech}</h5>
      {props.data.definitions.map((definition, index) => (
        <div key={index}>
          <ul>
            <li>{index + 1}.{" "} {definition.definition}</li>
            <li className={definition.example ? "example" : "inactive"}> Example: {definition.example}</li>
          </ul>
          {definition.synonyms ? <Synonyms data={definition.synonyms} /> : null}
          {/* {definition.antonyms ? <Antonyms data={definition.antonyms.length} /> : null} */}
        </div>
      )
      )}
         {props.data.synonyms.length > 0 ? <Synonyms synonyms={props.data.synonyms} /> : null}
      {/* {props.antonyms ? <Antonyms data={props.antonyms} /> : null} */}
    </div>
  );
}

export default Meanings;
