import { Repository as RepositoryI } from "../../interfaces/githubApi";
import "./repository.css";

import star from "../../assets/icons/star.svg";
import git from "../../assets/icons/git.svg";

interface RepositoryProps {
  repo: RepositoryI;
}

export const Repository = ({ repo }: RepositoryProps) => {
  return (
    <article className="repository">
      <div className="repository-container">
        <p className="repository__title">
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            {repo.name}
          </a>
          <span className="repository__title__tag">Public</span>
        </p>
        {repo.description && (
          <p className="repository__desc">{repo.description}</p>
        )}
        <div className="repository__topics">
          {repo.topics.map((topic, i) => (
            <span key={`${i}-${topic}`}>{topic}</span>
          ))}
        </div>
        <div className="repository__info">
          <span>{repo.language}</span>
          <span>
            <img src={star} alt="star icon" />
            {repo.stargazers_count}
          </span>
          <span>
            <img src={git} alt="git icon" />
            {repo.forks_count}
          </span>
          <span>Updated 2 days ago</span>
        </div>
      </div>
      <button className="repository__btn-star">
        <img src={star} alt="Star icon" />
        Star
      </button>
    </article>
  );
};
