import React from "react";
import Results from "../components/Results";
import { useState } from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [state, setState] = useState(false);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <p className="paragraph">Enter your github username below:</p>
      <div className="search-bar" style={{ padding: "50px" }}>
        <input
          type="text"
          placeholder="search"
          value={searchInput}
          onChange={handleChange}
        />
        <button className="search-button" onClick={() => setState(true)}>
          Search
        </button>
      </div>
      <Results className="repos-list" state={state} name={searchInput} />
    </>
  );
};
export default SearchBar;
