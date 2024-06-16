import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.card}>
      <img className={css.image} src={image} alt="User avatar" />
      <p className={css.userName}>{name}</p>
      <p className={css.userTag}>@{tag}</p>
      <p className={css.userLoc}>{location}</p>
      <ul className={css.statsContainer}>
        <li className={css.statsItem}>
          <span className={css.statsValue}>Followers</span>
          <span className={css.statsValue}>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsValue}>Views</span>
          <span className={css.statsValue}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsValue}>Likes</span>
          <span className={css.statsValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
