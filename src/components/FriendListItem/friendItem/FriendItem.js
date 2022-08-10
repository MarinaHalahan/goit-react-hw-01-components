import PropTypes from 'prop-types';
import { ItemWrapper, Status } from "./FriendItem.styled"

export const FriendItem = ({name, isOnline,avatar }) => {
    return (
        <ItemWrapper>
            <Status status ={isOnline}></Status>
            <img  src ={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </ItemWrapper>

    );
}

FriendItem.propTypes = {
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar : PropTypes.string,
};