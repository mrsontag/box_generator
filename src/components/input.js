import React, { useState } from 'react';

const Input = props => {
    const { boxList, setBoxList } = props;
    const [newColor, setNewColor] = useState("");
    const [newSize, setNewSize] = useState("");
    
    const isColor = strColor => {
        var s = new Option().style;
        s.color = strColor;
        return s.color === strColor;
    }

    const addBox = e => {
        e.preventDefault();
        if (isColor(newColor)) {
            //alert("submitted!" + currentInput);
            const nextBox = { newColor: newColor, newSize: newSize };
            setBoxList([...boxList, nextBox]);
            setNewColor("");
            setNewSize("");
        } else {
            alert("You've entered an invalid color, please try again!");
        }
    }
    
    return (
        <form onSubmit={ addBox}>
            <label for="boxcolor">Next Color</label>
            <input value={newColor} type="text" name="boxcolor" onChange={ e => setNewColor(e.target.value) }></input>
            <label for="boxsize">Next size</label>
            <input value={newSize} type="text" name="boxcolor" onChange={ e => setNewSize(e.target.value) }></input>
            <button onClick={ addBox }> Generate Box</button>;
        </form>
    )

}

export default Input;