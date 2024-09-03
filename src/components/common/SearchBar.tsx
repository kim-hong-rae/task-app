import styled from "styled-components";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const handleSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <SearchBarStyle>
      <input
        type="text"
        value={value}
        placeholder="검색어를 입력하세요."
        onChange={handleSearchBar}
      />
      <button className="search-button">🔍</button>
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
    padding-right: 120px; // 아이콘 위치 조정
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
`;

export default SearchBar;
