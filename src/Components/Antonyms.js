import './Antonyms.css';

function Antonyms(props) {
  if (props.antonyms) {
    return (
      <>
        <h6 className="Antonym-title">Antonyms</h6>
        <ul className="antonyms-list">
          {props.antonyms.map(function (antonym, index) {
            return (
              <li key={index}>
                <button
                  className="antonym-word"
                  onClick={e => { e.preventDefault(); props.handleSearch(antonym) }} >
                  {antonym}
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

export default Antonyms;