import Card from "./Card"
import Button from "./button"
import Student from "./Student"
import UserGreeting from "./UserGreeting"
import List from "./List"

function App() {
  const fruits = [{id:1 ,name:'apple', calories: 23},
            {id:2 ,name:'banana', calories: 112}, 
            {id:3 ,name:'orange', calories: 45},
            {id:4 ,name:'watermelon', calories: 34},
            {id:5 ,name:'mango', calories: 154 }
  ];

    const vegetables = [{id:6 ,name:'kale', calories: 146},
          {id:7 ,name:'chilli', calories: 37}, 
          {id:8 ,name:'spinach', calories: 113},
          {id:9 ,name:'corn', calories: 63},
          {id:10 ,name:'cabbage', calories: 50 }];

    return(
    <> 
    {/* Ternary operator */}
      {/* {fruits.length > 0 ?  <List items={fruits} category="Fruits"/> : null} */}
      {/* {vegetables.length > 0 ?  <List items={vegetables} category="Vegetables"/> : null}  */}
      {/* Short circuiting */}
      {fruits.length > 0 &&  <List items={fruits} category="Fruits"/>}
      {vegetables.length > 0 &&  <List items={vegetables} category="Vegetables"/>} 
    </>
  ); 
}

export default App
