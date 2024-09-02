import styled from "styled-components";
import Filter from "../components/common/Filter";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import SearchBar from "../components/common/SearchBar";
import UserList from "../components/users/UserList";
import { useState } from "react";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value: string) => setSearchValue(value);

  return (
    <HomeStyle>
      <Header />
      <div className="filter-container">
        <SearchBar value={searchValue} onChange={handleSearchChange} />
        <Filter />
      </div>
      <UserList searchValue={searchValue} />
      <Footer />
    </HomeStyle>
  );
};

const HomeStyle = styled.div`
  .filter-container {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    gap: 20px;
  }
`;

export default Home;
