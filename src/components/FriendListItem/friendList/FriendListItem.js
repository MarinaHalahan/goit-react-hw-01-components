
import {ListWrapper} from "./FriendListItem.styled"
import {FriendItem} from "../friendItem/FriendItem"


export const FriendList = ({ friends }) => {
    return (
        <ListWrapper>
            {friends.map(({id,name, avatar,isOnline}) => (
                <FriendItem key={id} name={name} avatar={avatar} isOnline={isOnline} />
            )
            )}
        </ListWrapper>

    );
}