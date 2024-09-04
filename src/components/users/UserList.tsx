import styled from "styled-components";
import UserItem from "./UserItem";
import Pagination from "../common/Pagination";
import { useFetchUsers } from "../../hook/useFetchUsers";
import { useFilterSortUsers } from "../../hook/useFilterSort";
import { usePagination } from "../../hook/usePagination";
import { SortType } from "../../type/type";

interface UserListProps {
  searchValue: string;
  sortOrder: SortType;
}

const UserList = ({ searchValue, sortOrder }: UserListProps) => {
  const { users, loading } = useFetchUsers();
  const sortedUsers = useFilterSortUsers(users, searchValue, sortOrder);
  const {
    currentItems: currentUsers,
    currentPage,
    setCurrentPage,
    totalPages,
  } = usePagination(sortedUsers, 6);

  return (
    <UserListStyle>
      {loading ? (
        <div>
          <p className="content-result">로딩 중입니다...</p>
        </div>
      ) : currentUsers.length === 0 ? (
        <div>
          <p className="content-result">항목에 맞는 검색 결과가 없습니다.</p>
        </div>
      ) : (
        <>
          <div className="user-items">
            {currentUsers.map((user, index) => (
              <UserItem key={index} user={user} />
            ))}
          </div>
          <div className="pagination">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </>
      )}
    </UserListStyle>
  );
};

const UserListStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .content-result {
    margin-top: 48px;
    font-size: 36px;
    text-align: center;
  }

  .user-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .pagination {
    margin-top: 20px;
    padding-bottom: 20px;
  }

  @media (max-width: 768px) {
    .content-result {
      font-size: 28px;
    }
  }

  @media (max-width: 480px) {
    .content-result {
      font-size: 24px;
    }
  }
`;

export default UserList;
