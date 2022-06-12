import "./Synonyms.css";

function Synonyms(props) {
  console.log('is there synonyms: ', props);
  if (props.synonyms) {
    return (
      <>
     <h6 className="Synonym-title">Synonyms</h6>
        <ul className="Synonyms-list">
          {props.synonyms.map(function (synonym, index) {
            return (
              <li className="word" key={index}>
                {synonym}
              </li>
            );
          })}
        </ul>
      </>
    );
  } else {
    return null;
  }
}

export default Synonyms;
