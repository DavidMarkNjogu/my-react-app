import Card from "./Card"
import Button from "./button"
import Student from "./Student"

//Css options:
/*
-inline
-modules
-external */
function App() {

    return(
      <> 
      <Button/>
      <Student name = "Patrick" age = "30" isStudent = {false}/>
      <Student name={123} age="16" isStudent={true}/>
      <Student name="Sarah" age="50" isStudent={false}/>
      <Student name="Alexa" age="20" isStudent={true}/>
      <Student/>
      </>
    )
}

export default App
