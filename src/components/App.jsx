import user from "../user.json";
import data from "../data.json";
import friends from "../friends.json";
import transactions from "../transactions.json"

import { Profile } from "./Profile/userProfile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendListItem/friendList/FriendListItem";
import { TransactionHistory } from "./TransactionHistory/transTable/TransactionHistory";

export const App = () => {
  return (
    <>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>

  );
};

