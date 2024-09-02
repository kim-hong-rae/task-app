import { useState } from "react";
import styled from "styled-components";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const handleSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(value);
  };

  return (
    <SearchBarStyle>
      <input
        type="text"
        value={value}
        placeholder="검색어를 입력하세요."
        onChange={handleSearchBar}
      />
    </SearchBarStyle>
  );
};

const SearchBarStyle = styled.div`
  margin-top: 12px;
  input {
    padding: 12px 60px;
  }
`;

export default SearchBar;
