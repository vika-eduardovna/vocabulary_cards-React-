import React from 'react'


export default function Triggers({ change_to_rus, change_to_eng }) {
    const btnStyle = {
        cursor: 'pointer',
        margin: '5px',
        padding: '10px',
        backgroundColor: 'green',
        color: 'white',
        borderRadius: '10px',
        border: '2px solid green',
        width: '70px'
    }

    return (
        <div>
            <button onClick={change_to_eng} style={btnStyle}>Eng</button>
            <button onClick={change_to_rus} style={btnStyle}>Rus</button>
        </div>
    )
}
