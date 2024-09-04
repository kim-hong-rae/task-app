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
        <option value={"asc"}>오름차순</option>
        <option value={"desc"}>내림차순</option>
      </select>
    </FilterStyle>
  );
};

const FilterStyle = styled.div`
  select {
    border: none;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    select {
      font-size: 14px;
    }
  }
`;

export default Filter;
