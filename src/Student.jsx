//js object - props
// propTypes = a mechanism that ensures the passed vaue is of the right datatype eg. propTypes.number
import PropTypes from 'prop-types'
// function Student(props){

//     return(
//         <div className="student">
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//             <p>Status: {props.isStudent ? "Yes" : "No"}</p>
//         </div>

//     );
// }

// React shifted from the use of defaultProps, so it wouldn't work.
function Student({ name = "Guest", age = 0, isStudent = false }) {
    return(
        <div className="student">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Status: {isStudent ? "Yes" : "No"}</p>
        </div>

    );
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
};
//NOTE: the datatypes strictness is not being enforced .
//No reason found yet

export default Student