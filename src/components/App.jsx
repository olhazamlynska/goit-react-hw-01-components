import {Profile } from "./Profile/Profile";
import user from '../data/user.json';

import { Statistics } from "./Statistics/Statistics";
import data from '../data/data.json';

import { FriendList } from "./FriendList/FriendList";
import friends from '../data/friends.json'

import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import tarnsactions from '../data/transactions.json'


import {AppWrap} from './App.styled'
import { StatisticWrap } from './Statistics/Statistics.styled'

export const App = () => {
  return (
    <AppWrap>
   <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      /><StatisticWrap>
      <Statistics title="Upload stats" stats={data} />
     </StatisticWrap>
      <FriendList friends={friends} />
      <TransactionHistory items={tarnsactions} />
    </AppWrap>
  );
};
