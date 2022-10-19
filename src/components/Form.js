import React from 'react'

export default function Form({ add }) {
    const inputStyle = {
        margin: '5px',
        padding: '10px',
        borderRadius: '10px',
        borderColor: 'purple'
    };

    const btnStyle = {
        cursor: 'pointer',
        padding: '10px',
        margin: '5px',
        backgroundColor: 'green',
        border: '1px solid green',
        width: '70px',
        color: 'white',
        borderRadius: '10px',
    };

    const submit = e => {
        e.preventDefault();
        const { rus, eng } = e.target;
        add(eng.value, rus.value)
        eng.value = '';
        rus.value = '';
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input style={inputStyle} placeholder='Russian' name='rus' type="text" />
                <input style={inputStyle} placeholder='English' name='eng' type="text" />
                <button style={btnStyle}>Add</button>
            </form>
        </div>
    )
}
