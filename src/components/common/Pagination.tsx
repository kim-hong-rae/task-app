import styled from "styled-components";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <PaginationStyle>
      {pages.map((page) => (
        <button
          key={page}
          className={currentPage === page ? "active" : ""}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </PaginationStyle>
  );
};

const PaginationStyle = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;

  button {
    padding: 10px;
    border: none;
    background-color: #f0f0f0;
    cursor: pointer;
    border-radius: 5px;

    &.active {
      background-color: #14807d;
      color: white;
    }

    &:hover {
      background-color: #14807d;
      color: white;
    }
  }
`;

export default Pagination;
