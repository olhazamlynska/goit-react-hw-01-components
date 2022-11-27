import { FriendItem, FriendOnline, FriendImg } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <FriendOnline online={isOnline}>{isOnline}</FriendOnline>
      <FriendImg src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendItem>
  );
};
