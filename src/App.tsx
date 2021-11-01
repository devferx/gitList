import profile from "./assets/images/profile.png";
import users from "./assets/icons/users.svg";
import star from "./assets/icons/star.svg";
import mapPin from "./assets/icons/map-pin.svg";
import link from "./assets/icons/link.svg";
import twitter from "./assets/icons/twitter.svg";
import heart from "./assets/icons/heart.svg";

export const App = () => {
  return (
    <main className="container">
      <section className="user">
        <header className="user__header">
          <img
            className="user__header__photo"
            src={profile}
            alt="Profile user"
          />
          <div className="user__header__content">
            <p className="user__header__content__username">Leonidas Esteban</p>
            <p className="user__header__content__name">Leonidas Esteban</p>
          </div>
        </header>
        <div className="user__desc">
          <p>Software Engineer, Professor</p>
          <div className="user__desc__stats">
            <span className="user__stats">
              <img className="user__stats__icon" src={users} alt="users icon" />
              <span className="user__stats__number">4.6k</span>
              <span className="user__stats__desc">Followers</span>
            </span>
            <span>·</span>
            <span className="user__stats">
              <span className="user__stats__number">60</span>
              <span className="user__stats__desc">Following</span>
            </span>
            <span>·</span>
            <span className="user__stats">
              <img className="user__stats__icon" src={star} alt="star icon" />
              <span className="user__stats__number">81</span>
            </span>
          </div>
        </div>

        <ul className="user__info">
          <li>
            <img src={mapPin} alt="Map Pin" />
            <span>Ciudad de México</span>
          </li>
          <li>
            <img src={link} alt="Link" />
            <a href="/" target="_blank" referrerPolicy="no-referrer">
              https://leonidasesteban.com
            </a>
          </li>
          <li>
            <img src={twitter} alt="Twitter" />
            <a href="/" target="_blank" referrerPolicy="no-referrer">
              @LeonidasEsteban
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
    </main>
  );
};
