import profilePic from './assets/profile.jpeg'

function Card(){
    
    return(
        <div className="card">
                <img className="card-image"src={profilePic} alt="Ohhh shoot. Shit happened!!" width="100px" height="120px" style={{/* borderRadius: "50%" */}}/>
                <h2 className="catd-title">Marcus</h2>
                <p className='card-text'>Typically a toxical user of Basically </p>
        </div>
    );

}

export default Card