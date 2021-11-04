import { SearchInput } from "../SearchInput";
import { Repository } from "../../interfaces/githubApi";

import "./repository-list.css";

interface RepositoryListProps {
  repositories: Repository[];
  searchResults: Repository[];
  searchQuery: string;
  searchRepository: (query: string) => void;
  onEmptySearchResults: (query: string) => JSX.Element;
  renderRepositories: (repo: Repository) => JSX.Element;
  renderSearchResults: (repo: Repository) => JSX.Element;
}

export const RepositoryList = ({
  repositories,
  searchQuery,
  searchResults,
  searchRepository,
  onEmptySearchResults,
  renderRepositories,
  renderSearchResults,
}: RepositoryListProps): JSX.Element => {
  return (
    <section className="repositories">
      <SearchInput searchRepository={searchRepository} />
      {searchQuery.length !== 0 &&
        searchResults.length === 0 &&
        onEmptySearchResults(searchQuery)}
      {searchResults.length !== 0
        ? searchResults.map((repo) => renderSearchResults(repo))
        : repositories.map((repo) => renderRepositories(repo))}
    </section>
  );
};
