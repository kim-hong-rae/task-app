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
    </SearchBarStyle>
  );
};

const SearchBarStyle = styled.div`
  margin-top: 12px;
  input {
    padding: 12px 140px;
  }
`;

export default SearchBar;
