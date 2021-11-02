import { useGithubProfile } from "./hooks/useGithubProfile";
import { Loading } from "./components/Loading";
import { Repository } from "./components/Repository";

import { GithubProfile } from "./components/GithubProfile";
import { User } from "./components/User";
import { RepositoryList } from "./components/RepositoryList";
import { SearchInput } from "./components/SearchInput";

export const App = () => {
  const { user, repositories, isLoading, searchResults, searchRepository } =
    useGithubProfile("devferx");

  return (
    <GithubProfile
      isLoading={isLoading}
      user={user}
      onLoading={() => <Loading />}
    >
      <User user={user!} />
      <RepositoryList>
        <SearchInput searchRepository={searchRepository} />
        {searchResults.length === 0
          ? repositories.map((repo) => <Repository key={repo.id} repo={repo} />)
          : searchResults.map((repo) => (
              <Repository key={repo.id} repo={repo} />
            ))}
      </RepositoryList>
    </GithubProfile>
  );
};
