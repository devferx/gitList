import { useEffect, useState } from "react";
import { githubApi } from "../api/githubApi";
import { GithubApiUserResponse, Repository } from "../interfaces/githubApi";

export const useGithubProfile = (username: string) => {
  const [user, setUser] = useState<GithubApiUserResponse>();
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [searchResults, setSearchResults] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [userInfo, repos] = await Promise.all([
        githubApi.getUser(username),
        githubApi.getUserRespos(username),
      ]);
      setUser(userInfo.data);
      setRepositories(repos.data);
      setIsLoading(false);
    };

    fetchData();
  }, [username]);

  const searchRepository = (query: string) => {
    const results = repositories.filter((repo) =>
      repo.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return {
    user,
    repositories,
    isLoading,
    searchResults,
    searchRepository,
  };
};
