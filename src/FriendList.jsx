import FriendListItem from "./FriendListItem";

const FriendList = ({ userFriends }) => {
  return (
    <ul>
      {userFriends.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              status={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
