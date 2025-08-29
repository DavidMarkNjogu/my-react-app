import React, {useState} from "react"

function MyComponent(){

    // [] for array destructuring
    //useState returns an array with 2 elements: variable & setter function
    //1. stateful variable 4 name 
    //2. seter function specifically 4 the variable. Naming convection : setVariable
    //if ever thee is a need to change the value of the variable, use the setter function
    const  [name, setName] = useState("Guest");
    const  [age, setAge] = useState(0);
    const  [isEmployed, setIsEmployed] = useState("false");

    const updateName = () => {
        setName("Marcus");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }
           
    const toggleEmployedStatus = () =>{
        setIsEmployed(!isEmployed);
        console.log(isEmployed)
    }
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle status</button>
        </div>
    );
}

export default MyComponent