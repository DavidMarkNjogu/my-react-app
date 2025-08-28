import Card from "./Card"
import Button from "./button"
import Student from "./Student"
import UserGreeting from "./UserGreeting"

//Css options:
/*
-inline
-modules
-external */
function App() {

    return(
      <> 
        <UserGreeting isLoggedIn={false} username="Marcus"/>
        <UserGreeting isLoggedIn={true} />
      </>
    )
}

export default App
