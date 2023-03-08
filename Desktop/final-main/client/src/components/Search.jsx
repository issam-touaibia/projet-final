import React, { useState } from "react";

const Search = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);
  return (
    <div className="search-container">
      <form action="">
        <input
          classeName="inp"
          type="text"
          value={text}
          onChange={handleChange}
        />
        ;
      </form>
    </div>
  );
};

export default Search;
