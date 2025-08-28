import PropTypes from 'prop-types'

function UserGreeting({isLoggedIn= false, username="Guest"}){
     
    const welcomeMessage = <h2 className='welcome-message'>Welcome {username}</h2>
    const loginPrompt = <h2 className='login-prompt'>Please log in to continue</h2>

    return(isLoggedIn) ? welcomeMessage : loginPrompt
    
    //OR
    // if(props.isLoggedIn){
    //     return <h2 className='welcome-message'>Welcome {props.username}</h2>
    // } else{
    //     return <h2 className='login-prompt'>Please log in to continue</h2>
    // }

}
 UserGreeting.propTypes = {
    isLoggedsIn: PropTypes.bool,
    username: PropTypes.string,
}

export default UserGreeting