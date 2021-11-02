import monaLoadingDark from "../../assets/images/mona-loading-dark.gif";
import "./loading.css";

export const Loading = () => {
  return (
    <div className="loading-container">
      <img src={monaLoadingDark} alt="Loading gif" />
      <p>One moment please...</p>
    </div>
  );
};
