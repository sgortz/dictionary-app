import { useState } from "react";
import axios from "axios";
import Definitions from "./Definitions";
import ErrorMessage from "./ErrorMessage";
import "./Dictionary.css";

function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [notFound, setNotFound] = useState(false);

  function handleSearch(word) {

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl)
      .then(response => setResults(response.data[0]))
      .catch(err => setNotFound(true));
  }

  function handleKeyword(e) {
    setKeyword(e.target.value);
  }

  return (
    <div className="Dictionary">
      <form
        className="word-search"
        onSubmit={e => { 
          e.preventDefault(); 
          handleSearch(keyword) }}>
        <input
          type="search"
          aria-label="Word Search Input"
          placeholder="What word will you look up?"
          value={keyword}
          onChange={handleKeyword }
        />
      </form>
      {notFound ? <ErrorMessage /> : <Definitions data={results} handleSearch={handleSearch} />}
    </div>
  );
}

export default Dictionary;