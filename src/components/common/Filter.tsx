import styled from "styled-components";

const Filter = () => {
  return (
    <FilterStyle>
      <select>
        <option>오름차순</option>
        <option>내림차순</option>
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
