import styled from "styled-components";
import Filter from "../components/common/Filter";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import SearchBar from "../components/common/SearchBar";
import UserList from "../components/users/UserList";

const Home = () => {
  return (
    <HomeStyle>
      <Header />
      <div className="filter-container">
        <SearchBar />
        <Filter />
      </div>
      <UserList />
      <Footer />
    </HomeStyle>
  );
};

const HomeStyle = styled.div`
  .filter-container {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 20px;
  }
`;

export default Home;
