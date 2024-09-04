import { useEffect, useState } from "react";
import { User } from "../type/type";
import { fetchRandomUser } from "../api/api";

export const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      setLoading(true);
      try {
        const response = await fetchRandomUser();
        const allUsers = response.results;
        setUsers(allUsers);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUserData();
  }, []);

  return { users, loading };
};
