import { useState } from "react";

function App() {
let [number, setNumber] = useState(0);

return (	
	<div>
		<h1>Number: {number} </h1>
		<button onClick={()=>setNumber(number+1)}>Increment</button>
	</div>	
);

};

export default App;
