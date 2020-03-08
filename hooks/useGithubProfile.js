import useSWR from "swr";

import fetcher from "../helpers/fetcher";

export default function useGithubProfile(user, initialData) {
  const { data, error } = useSWR(
    `https://api.github.com/users/${user}`,
    fetcher,
    initialData
  );
  return {
    data,
    error
  };
}
