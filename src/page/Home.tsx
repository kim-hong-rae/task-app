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

  const handleSearch = (value: string) => setSearchValue(value);

  const handleSortChange = (value: SortType) => setSortOrder(value);

  return (
    <HomeStyle>
      <Header />
      <div className="filter-container">
        <SearchBar onSearch={handleSearch} />
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

  @media (max-width: 768px) {
    .filter-container {
      margin-left: 10px;
      gap: 8px;
      align-items: flex-end;
    }
  }
`;

export default Home;
