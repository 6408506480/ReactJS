import React, {useRef} from 'react';

function App() {

// Creating a ref object using useRef hook
let fastName, lastName = useRef();

const handler = () => {
	let fName=fastName.value;
  let lName=lastName.value;
  alert("Hello " + fName + " " + lName);
};

return (	
	<div>
    <input ref={(f)=>fastName=f} placeholder='Fast Name'></input> 
    <br></br> <br></br>
    <input ref={(l)=>lastName=l} placeholder='Last Name'></input> 
    <br></br> <br></br>
		<button onClick={handler}> Submit </button>
	</div>	
);

};

export default App;
