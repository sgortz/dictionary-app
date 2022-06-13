import "./Synonyms.css";

function Synonyms(props) {
  if (props.synonyms) {
    return (
      <>
        <h6 className="Synonym-title">Synonyms</h6>
        <ul className="Synonyms-list">
          {props.synonyms.map(function (synonym, index) {
            return (
              <li key={index}>
                <button
                  className="word"
                  onClick={e => { e.preventDefault(); props.handleSearch(synonym) }}
                >
                  {synonym}
                </button>
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