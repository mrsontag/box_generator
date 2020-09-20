import React, { useState } from 'react';
import './App.css';
import DisplayBoxes from './components/displayboxes';
import Input from './components/input';
function App() {

  const [boxList, setBoxList] = useState([]);
  //const boxList = ["black","green","yellow"];
  //setBoxList("black");

  return (
    
    <div className="App">
      <Input boxList={boxList} setBoxList={setBoxList}/>
      <DisplayBoxes boxList={ boxList } />
    </div>
  );
}

export default App;
