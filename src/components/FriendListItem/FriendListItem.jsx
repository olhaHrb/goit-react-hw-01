import css from "./FriendListItem.module.css";

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <div>
      <img className={css.friendImage} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <div>
        {isOnline ? (
          <p className={css.friendStatusOnline}>Online</p>
        ) : (
          <p className={css.friendStatusOffline}>Offline</p>
        )}
      </div>
    </div>
  );
};

export default FriendListItem;
