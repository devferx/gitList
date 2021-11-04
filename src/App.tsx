import { useGithubProfile } from "./hooks/useGithubProfile";
import { Loading } from "./components/Loading";
import { Repository } from "./components/Repository";

import { GithubProfile } from "./components/GithubProfile";
import { User } from "./components/User";
import { RepositoryList } from "./components/RepositoryList";

export const App = () => {
  const {
    user,
    repositories,
    isLoading,
    searchQuery,
    searchResults,
    searchRepository,
  } = useGithubProfile("devferx");

  return (
    <GithubProfile
      isLoading={isLoading}
      user={user}
      onLoading={() => <Loading />}
    >
      <User user={user!} />
      <RepositoryList
        searchQuery={searchQuery}
        repositories={repositories}
        searchResults={searchResults}
        searchRepository={searchRepository}
        onEmptySearchResults={(query) => (
          <p>No se encontraron resultados para {query}</p>
        )}
        renderRepositories={(repo) => <Repository key={repo.id} repo={repo} />}
        renderSearchResults={(repo) => <Repository key={repo.id} repo={repo} />}
      />
    </GithubProfile>
  );
};
