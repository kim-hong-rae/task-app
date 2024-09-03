import styled from "styled-components";
import Filter from "../components/common/Filter";
import Header from "../components/common/Header";
import SearchBar from "../components/common/SearchBar";
import UserList from "../components/users/UserList";
import { useState } from "react";
import { SortType } from "../type/type";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [sortOrder, setSortOrder] = useState<SortType>("asc");

  const handleSearchChange = (value: string) => setSearchValue(value);

  const handleSortChange = (value: SortType) => setSortOrder(value);

  return (
    <HomeStyle>
      <Header />
      <div className="filter-container">
        <SearchBar value={searchValue} onChange={handleSearchChange} />
        <Filter value={sortOrder} onChange={handleSortChange} />
      </div>
      <UserList searchValue={searchValue} sortOrder={sortOrder} />
    </HomeStyle>
  );
};

const HomeStyle = styled.div`
  .filter-container {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
  }
`;

export default Home;
