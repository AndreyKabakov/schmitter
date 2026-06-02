import {useContext} from "react";
import {ShmitterContext} from "../utils/context.ts";

interface AvatarProps {
    size?: 'small';
}

const Avatar = ({size}: AvatarProps) => {
    const {user, changeAvatar, changeName} = useContext(ShmitterContext);

    return (
        <img
            onClick={() => {
                const url = prompt('Enter avatar url');
                changeAvatar(url);
            }}
            onContextMenu={e=>{
                e.preventDefault();
                const name = prompt('Enter name');
                changeName(name);
            }}
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar}
            alt={user.name}
        />
    )
}

export default Avatar;