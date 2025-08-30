import { useState } from "react";

function MyComponent3(){

    const [car, setCar] = useState({year: 2024,
                                    make: "Ford",
                                    model: "Mustang"})


    function HandleYearChange(event){
        //spread operator ( ... ) - allows an iterable{ Python object capable of returning its members one at a time, permitting it to be iterated over in a for-loop.} 
        // such as an arrray or string, lists or tuples
        //to be expanded into seperate elements(unpacks the elements)
        //will be like:  setCar({year: 2024, make: "Ford", model: "Mustang", year: 2025}); object with duplicate properties: will use the later one,
        //If curly braces after an arrow function, Js thinks that a multiline statement is being written. Wrap the {} in a set of ()
        setCar(c => ({...c, year: event.target.value}));
    }    
    function handleMakeChange(event){
         setCar(c => ({...c, make: event.target.value}));
    }

    function HandleModelChange(event){
         setCar(c => ({...c, model: event.target.value}));
    }

    return(
    <>
        <div>
            <p>Your favourite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={HandleYearChange}/><br />
            <input type="text" value={car.make} onChange={handleMakeChange}/><br />
            <input type="text" value={car.model} onChange={HandleModelChange}/><br />
        </div>
    </>
    )
}

export default MyComponent3