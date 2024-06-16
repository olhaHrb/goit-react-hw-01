import "./App.css";
import Profile from "../Profile/Profile";
import userData from "../../userData.json";
import FriendList from "../FriendList/FriendList";
import friends from "../../friends.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../../transactions.json";

const App = () => {
  return (
    <div>
      <Profile userProfile={userData} />
      <FriendList userFriends={friends} />
      <TransactionHistory userTransactions={transactions} />
    </div>
  );
};

export default App;
