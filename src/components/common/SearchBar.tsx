import styled from "styled-components";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    onSearch(inputValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <SearchBarStyle>
      <input
        type="text"
        value={inputValue}
        placeholder="검색어를 입력하세요."
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button className="search-button" onClick={handleSearch}>
        🔍
      </button>
    </SearchBarStyle>
  );
};

const SearchBarStyle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  position: relative;

  input {
    flex: 1;
    padding: 12px;
    padding-right: 120px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  .search-button {
    position: absolute;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    color: #666;
    outline: none;
  }

  @media (max-width: 768px) {
    width: 420px;
    display: flex;
    input {
      font-size: 14px;
      padding-right: 100px;
    }
  }

  @media (max-width: 480px) {
    width: 360px;
    input {
      font-size: 12px;
      padding: 8px;
    }
    .search-button {
      font-size: 16px;
      right: 8px;
    }
  }
`;

export default SearchBar;
