import React from 'react';
import Box from './box';

const DisplayBoxes = props => {
    const  { boxList } = props;
    return( 
        <> 
        {boxList.map( item => <Box boxProps={item} />) }
        </>
    )
}
//
        
//<Box boxColor={ boxList }/>
export default DisplayBoxes;