import React from 'react';

const person = (props) => {
    const divStyle = {
        backgroundColor: 'lightblue'
    };

    return (
        <div style={divStyle}>
            <p>I am {props.name}!</p>
            <p>I am {props.age} years old.</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person;