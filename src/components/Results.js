import React, { useEffect, useState } from "react";

function Results({ state, name }) {
  const [repos, setRepos] = useState([]);

  const getRepos = async (val) => {
    const reps = await fetch(
      `https://api.github.com/users/${name}/repos?per_page=8&page=${val}`
    );
    const data = await reps.json();
    setRepos(data);
  };

  useEffect(() => {
    if (state) {
      getRepos(1);
    }
  }, [state]);

  return (
    <div className="repos">
      <h1 className="repo-header">Repositories</h1>
      <ul className="repo-container">
        {repos[0] &&
          repos.map((repo, i) => (
            <a
              href={`https://github.com/${name}/${repo.name}`}
              key={i}
              target="_blank"
            >
              <li className="repo-card">
                <h4 className="repo-name">{repo.name}</h4>
              </li>
            </a>
          ))}
      </ul>
      <div className="buttons">
        <button onClick={() => getRepos(1)} className="previous">
          Previous
        </button>
        <button onClick={() => getRepos(2)} className="next">
          Next
        </button>
      </div>
    </div>
  );
}
export default Results;
