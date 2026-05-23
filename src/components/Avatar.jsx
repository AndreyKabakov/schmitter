const Avatar = ({size, user}) => {
    return (
        <img className={`user-avatar ${size ?? ''}`}
             src={user.avatar}
             alt={user.name} />
    )
};

export default Avatar;