import "./Synonyms.css";

function Synonyms(props) {
  if (props.data) {
    return (
      <ul className="Synonyms">
        {props.data.map(function (synonym, index) {
          return (
            <li className="word" key={index}>
              {synonym}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}

export default Synonyms;
