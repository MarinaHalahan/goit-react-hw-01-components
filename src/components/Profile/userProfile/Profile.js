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





{/* <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/> */}




{/* <div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div> */}