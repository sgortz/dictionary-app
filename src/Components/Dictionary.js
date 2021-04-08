import "./Dictionary.css";
import { useState } from "react";
import axios from "axios";

function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function handleSearch(event) {
    event.preventDefault();

    let language = "en_US/";
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/${language}${keyword}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyword(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="word-search" onSubmit={handleSearch}>
        <input
          type="search"
          aria-label="Word Search Input"
          placeholder="What word will you look up?"
          onChange={handleKeyword}
        />

        {/* <i className="fas fa-search"></i>  */}
      </form>
      <div className="light-green">
        <h2 className="main-word">Awesome</h2>
        <small>"/ˈɔsəm/" 🔊</small>

        <ul className="examples">
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

        <h4>Synonyms</h4>
        <ul className="synonyms">
          <li className="word">breathtaking</li>
          <li className="word">amazing</li>
          <li className="word">stunning</li>
          <li className="word">astounding</li>
          <li className="word">astonishing</li>
          <li className="word">awe-inspiring</li>
          <li className="word">stupendous</li>
          <li className="word">staggering</li>
          <li className="word">extraordinary</li>
          <li className="word">unbelievable</li>
          <li className="word">incredible</li>
        </ul>
      </div>
    </div>
  );
}

export default Dictionary;
