import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    navigate("/search?q=" + query);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
};

export default SearchForm;
