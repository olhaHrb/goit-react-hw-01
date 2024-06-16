import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ userFriends }) => {
  return (
    <ul className={css.friendList}>
      {userFriends.map((friend) => {
        return (
          <li className={css.friendProfile} key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
