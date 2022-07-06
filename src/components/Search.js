import React, { useContext, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import BookContext from "../BookContext";
const Search = () => {
  const [value, setValue] = useState("");
  
  const { fetchBooks, fetchSearch } = useContext(BookContext);
  const onKeyUp = (event) => {
    if (event.key === "Enter" && value !== "") {
      const query = value.trim();
      if (query === "") {
        fetchBooks();
      } else {
        fetchSearch(query);
      }
      setValue("");
    }
  };

  return (
    <div className="search-books">
      <label htmlFor="search">
        <RiSearchLine />
      </label>
      <input
        type="text"
        id="search"
        placeholder="Cari Buku ...."
        onKeyDown={(e) => onKeyUp(e)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Search;
