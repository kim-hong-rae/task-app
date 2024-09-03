import styled from "styled-components";
import { SortType } from "../../type/type";

interface FilterProps {
  value: SortType;
  onChange: (value: SortType) => void;
}

const Filter = ({ value, onChange }: FilterProps) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as SortType);
    console.log(e.target.value);
  };
  return (
    <FilterStyle>
      <select value={value} onChange={handleSortChange}>
        <option>asc</option>
        <option>desc</option>
      </select>
    </FilterStyle>
  );
};

const FilterStyle = styled.div`
  select {
    border: none;
  }
`;

export default Filter;
