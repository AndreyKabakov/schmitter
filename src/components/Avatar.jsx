import {SchmitterContext} from "../utils/context.js";
import {useContext} from "react";

const Avatar = ({size}) => {
    const {user,changeAvatar}= useContext(SchmitterContext);
    return (
        <img
            onClick={()=>{
                const url=prompt('Please enter new avatar URL');
                changeAvatar(url);
            }}
            className={`user-avatar ${size ?? ''}`}
             src={user.avatar}
             alt={user.name}
        />
    )
};

export default Avatar;