import { useState } from "react";
import axios from "axios";
import Definitions from "./Definitions";
import "./Dictionary.css";

function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data[0]);
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
      </form>
      <Definitions data={results} />
    </div>
  );
}

export default Dictionary;
