
function ProfilePicture(){
    const imageUrl = './src/assets/profile.jpeg'

    const handleClick = () => console.log("OUCH!");
    return(
        <img onClick={handleClick} src={imageUrl} alt="" />
    );
}

export default ProfilePicture