/* updater function - A function passed as an arguemeny to setState() usually
                        eg. setYear(arrow function)
                            ie.  setYear(y => y + 1)
                        Allow for safe updates based on the previous state
                        Used with multiple state updates and asynchronous functions
                        Good practice to updater functions
*/ 

import React, {useState} from "react";

function MyComponent2(){
    
    const [count, setCount] = useState(0);

    // function increment(){

    //     // Uses the CURRENT state to calculate the NEXT state
    //     // set functions don't trigger an update
    //     // React batches together state update for performance reasons
    //     // NEXT state becomes the CURRENT state after an update
    //         //  basically setting count to be 1, three seperate times then updating
    //         // similar to hitting refresh butoon on the browser a couple of times. Sent the refresh request/ commands multiple times but may only end up refreshing once, and not every time the button is hit

    //         setCount(count + 1); // (0 + 1)
    //         setCount(count + 1); // (0 + 1)
    //         setCount(count + 1); // (0 + 1) then UPDATE
    // }
    
    // IF USING MULTIPLE STATE UPDATES< USE UPDATER FUNCTION
    // Conventionally, it's common 2 name the pending state arguement for the first letter of the state variable name, like a for age. However, might also call it like prevAge or sth else that may be found clearer
    
    function increment(){
        // c reps the previousCount not current

        // Takes the PENDING(NOT CURRENT) state to calculate the next state.
        // React puts the updater unction in a queue(type of data structure)
        //During the next render, it will call them in the same order
        
        // use even if only updagte once; future proofs code in case of additions in the future
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }
    function decrement(){
        setCount(c => c -1)
        setCount(c => c -1)
        setCount(c => c -1)
    }
    function reset(){
        // not deepndent on prev state
        //would be setCount(c => c = 0)
        setCount(0);
    }
    return(
        <>
            <div className="counter-container">
                <p className="count-display">{count}</p>
                 <button className="counter-button"onMouseDownCapture={decrement}>Decrement</button>
                 <button className="counter-button"onClick={reset}>Reset</button>
                 <button className="counter-button"onClick={increment}>Increment</button>
            </div>
        </>
    );
}

export default MyComponent2
