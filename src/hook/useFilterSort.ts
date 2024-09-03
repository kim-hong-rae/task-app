import { useMemo } from "react";
import { SortType, User } from "../type/type";

export const useFilterSortUsers = (
  users: User[],
  searchValue: string,
  sortOrder: SortType
) => {
  return useMemo(() => {
    const filteredUsers = users.filter((user) =>
      `${user.name.first} ${user.name.last}`
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    );

    return [...filteredUsers].sort((a, b) => {
      const nameA = `${a.name.first} ${a.name.last}`.toLowerCase();
      const nameB = `${b.name.first} ${b.name.last}`.toLowerCase();
      return sortOrder === "asc"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
  }, [users, searchValue, sortOrder]);
};
