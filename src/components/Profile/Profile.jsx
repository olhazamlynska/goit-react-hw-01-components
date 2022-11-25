
import PropTypes from 'prop-types';
import {ProfileWrspper,ProfileDescription,ProfileName, ProfileImg, ProfileStarts, ProfileStartsItem, StatsQuantity} from './Profile.styled';



export const Profile = ({ username, tag, location, avatar, stats:{followers, views, likes} }) => { 
   return <ProfileWrspper >
  <ProfileDescription >
    <ProfileImg
      src={avatar}
      alt="User avatar"
  
    />
    <ProfileName >{username}</ProfileName>
         <p >@{tag}</p>
    <p >{location}</p>
  </ProfileDescription>

  <ProfileStarts >
    <ProfileStartsItem>
      <p >Followers</p>
      <StatsQuantity>{followers}</StatsQuantity>
    </ProfileStartsItem>
       <ProfileStartsItem>
      <p >Views</p>
      <StatsQuantity >{views}</StatsQuantity>
    </ProfileStartsItem>
    <ProfileStartsItem>
      <p>Likes</p>
      <StatsQuantity>{likes}</StatsQuantity>
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