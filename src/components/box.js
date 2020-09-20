import React from 'react';

const Box = props => {
    const { boxProps } = props;
    const newBoxStyle = {
        backgroundColor: boxProps.newColor,
        height: boxProps.newSize + "px",
        width: boxProps.newSize + "px",
    }
    return(
        <div class="NewBox" style={newBoxStyle} ></div>
    );
}
export default Box;