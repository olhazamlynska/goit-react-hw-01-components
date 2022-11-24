
import PropTypes from 'prop-types';
import {ProfileWrspper,ProfileDescription,ProfileName, ProfileImg, ProfileStarts, ProfileStartsItem, StatsQuantity} from './Profile.styled';



export const Profile = ({ username, tag, location, avatar, stats:{followers, views, likes} }) => { 
   return <ProfileWrspper className="profile">
  <ProfileDescription className="description">
    <ProfileImg
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <ProfileName className="name">{username}</ProfileName>
         <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </ProfileDescription>

  <ProfileStarts className="stats">
    <ProfileStartsItem>
      <p className="label">Followers</p>
      <StatsQuantity className="quantity">{followers}</StatsQuantity>
    </ProfileStartsItem>
       <ProfileStartsItem>
      <p className="label">Views</p>
      <StatsQuantity className="quantity">{views}</StatsQuantity>
    </ProfileStartsItem>
    <ProfileStartsItem>
      <p className="label">Likes</p>
      <StatsQuantity className="quantity">{likes}</StatsQuantity>
    </ProfileStartsItem>
  </ProfileStarts>
</ProfileWrspper>
}


Profile.propTypes = {
   username: PropTypes.string.isRequired,
   tag: PropTypes.string.isRequired,
   location:PropTypes.string.isRequired,
   avatar: PropTypes.string.isRequired,
   stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
    likes:PropTypes.number.isRequired,
  }).isRequired,
}