
function Button(){
    
 

    const handleClick2  = (name) => console.log(`${name} stop clicking me`);
    //adding parenthesis after callback invokes it immediately . outputs b4 click
    // return(<button onClick={handleClick2("Marcus")}>Click me😊😀😀</button>);

        let count = 0;
    const handleClick01 = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you click me ${count} time(s)`)
        } else {
            console.log(`${name} stop clicking me`);
        }
    }

    // Event 
    const handleClick = (e) => e.target.textContent = "OUCH!😭😭🤕";
    //sending args to a function
    return(<button onClick={(e) => handleClick(e)}>Click me😊😀😀</button>);
    
}

export default Button