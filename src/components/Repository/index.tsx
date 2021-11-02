import { Repository as RepositoryI } from "../../interfaces/githubApi";

interface RepositoryProps {
  repo: RepositoryI;
}

export const Repository = ({ repo }: RepositoryProps) => {
  return <div></div>;
};
