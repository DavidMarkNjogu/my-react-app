import PropTypes from 'prop-types'
console.log(typeof PropTypes); 
function List( {category = "Category", items = []} ){

    // fruits.sort((a, b) => a.name.localeCompare(b.name) );
    //fruits.sort((a, b) => b.name.localeCompare(a.name) ); //reverse
    // fruits.sort((a, b) => a.calories - b.calories); //numeric
    // fruits.sort((a, b) => b.calories - a.calories); //desc numeric

    // const lowCalorieFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalorieFruits = fruits.filter(fruit => fruit.calories >= 100);
    // const category = category;
    const itemList = items;
    const listItems = itemList.map(item => { return <li key={item.id}>
                                                    {item.name} : &nbsp;
                                                    <b>{item.calories}</b>
                                                    </li>});
    return(
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems} </ol>
        </>
        
    );
    //return(fruits); // at first will return applebananaorangewatermelonmango
}

List.propTypes = {
    category: PropTypes.string,
    item : PropTypes.arrayOf(PropTypes.shape({  id : PropTypes.number,
                                                 name: PropTypes.string,
                                                calories: PropTypes.number})),
}
export default List