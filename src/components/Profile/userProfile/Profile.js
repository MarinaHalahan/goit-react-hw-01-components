import {ProfileWrapper, DescriptionUser,StatsWrapper} from "./Profile.styled"
import {Stats} from "../userStats/Stats.js"


export const Profile = ({ username, tag, avatar, location, stats:{followers, views, likes } }) => {
    return (
        < ProfileWrapper >
            <DescriptionUser>
        <img src={avatar} alt="User avatar" width={150}/>
        <p >{username}</p>
        <p >@{tag}</p>
        <p >{location}</p>
            </DescriptionUser>
            <StatsWrapper>
                <Stats text="Followers" number={followers}/>
                <Stats text="Views" number={views}/>
                <Stats text="Likes" number={likes}/> 
                
        </StatsWrapper>
                 
        </ProfileWrapper >)
    
    
}








