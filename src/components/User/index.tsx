import { GithubApiUserResponse } from "../../interfaces/githubApi";

import users from "../../assets/icons/users.svg";
import star from "../../assets/icons/star.svg";
import mapPin from "../../assets/icons/map-pin.svg";
import link from "../../assets/icons/link.svg";
import twitter from "../../assets/icons/twitter.svg";
import heart from "../../assets/icons/heart.svg";
import "./user.css";

interface UserProps {
  user: GithubApiUserResponse;
}

export const User = ({ user }: UserProps) => {
  return (
    <section className="user">
      <header className="user__header">
        <img
          className="user__header__photo"
          src={user.avatar_url}
          alt="Profile user"
        />
        <div className="user__header__content">
          <p className="user__header__content__username">{user.login}</p>
          <p className="user__header__content__name">{user.name}</p>
        </div>
      </header>
      <div className="user__desc">
        <p>{user.bio}</p>
        <div className="user__desc__stats">
          <span className="user__stats">
            <img className="user__stats__icon" src={users} alt="users icon" />
            <span className="user__stats__number">{user.followers}</span>
            <span className="user__stats__desc">Followers</span>
          </span>
          <span>·</span>
          <span className="user__stats">
            <span className="user__stats__number">{user.following}</span>
            <span className="user__stats__desc">Following</span>
          </span>
          <span>·</span>
          <span className="user__stats">
            <img className="user__stats__icon" src={star} alt="star icon" />
            <span className="user__stats__number">{user.public_repos}</span>
          </span>
        </div>
      </div>

      <ul className="user__info">
        <li>
          <img src={mapPin} alt="Map Pin" />
          <span>{user.location}</span>
        </li>
        <li>
          <img src={link} alt="Link" />
          <a href={user.blog} target="_blank" rel="noreferrer">
            {user.blog}
          </a>
        </li>
        <li>
          <img src={twitter} alt="Twitter" />
          <a
            href={`https://twitter.com/${user.twitter_username}`}
            target="_blank"
            rel="noreferrer"
          >
            @{user.twitter_username}
          </a>
        </li>
      </ul>

      <div className="user__actions">
        <button>Follow</button>
        <button>
          <img src={heart} alt="heart" /> Sponsor
        </button>
      </div>
    </section>
  );
};
