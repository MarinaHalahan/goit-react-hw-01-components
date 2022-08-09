import {ProfileWrapper, DescriptionUser,StatsWrapper, ProfileSection} from "./Profile.styled"
import {Stats} from "../userStats/Stats.js"


export const Profile = ({ username, tag, avatar, location, stats:{followers, views, likes } }) => {
  return (
      <ProfileSection>
        < ProfileWrapper >
            <DescriptionUser>
        <img className = "userImg" src={avatar} alt="User avatar" width={150}/>
        <p className="nameUser">{username}</p>
        <p >@{tag}</p>
        <p >{location}</p>
            </DescriptionUser>
            <StatsWrapper>
                <Stats text="Followers" number={followers}/>
                <Stats text="Views" number={views}/>
                <Stats text="Likes" number={likes}/> 
                
        </StatsWrapper>
                 
      </ProfileWrapper >
      </ProfileSection>)
    
    
}








