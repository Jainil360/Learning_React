import React from 'react'


// const Greet = ({name}) => {
//     return (
//         <div className='container text-center'>
//         <h1>Hello {name}</h1>
//         </div>
//     )
// };

// export default Greet;

//ReactJS Tutorial - 12 - Destructuring props and state in parameter


const Greet = props => {
    const {fname,lname}    = props;
    return (
        <div className='container text-center'>
        <h1>Hello {fname} - Func</h1>
        </div>
    )
};

export default Greet;

//ReactJS Tutorial - 12 - Destructuring props and state in body