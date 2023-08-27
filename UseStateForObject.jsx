import { useState } from "react";

function App() {

  let [myObj, setMyObj] = useState({
	"key1":"Value1",
	"key2":"Value2",
	"key3":"Value3",
  });

  let changeObj =()=>{
	setMyObj({
		"key1":"New Value1",
		"key2":"New Value2",
		"key3":"New Value3",
	})
  }

  return (	
	<div>
		<h1> {myObj.key1} </h1>
		<button onClick={changeObj}>Change</button>
	</div>	
  );

};

export default App;
