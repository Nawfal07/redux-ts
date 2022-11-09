import React, { useState } from "react";
import useActions from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypesSelector";

const RepositoriesList: React.FC = (props) => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };

  const { error, loading, data } = useTypedSelector(
    (state) => state.repositories
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
        <button>Search</button>
        {error && <h3>{error}</h3>}
        {loading ? (
          <h3>Is loading ...</h3>
        ) : (
          <ul>
            {data.map((repo: any) => (
              <li>{repo}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
};

export default RepositoriesList;
